"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { product_list } from "../data/product-list";
import { IProduct } from "@/types/products";
import { toast } from "sonner";

const CartContext = createContext<
  | {
      cartItems: IProductWithCount[];
      addToCart: (productId: number) => void;
      removeFromCart: (productId: number) => void;
      increaseProductCount: (productId: number) => void;
      decreaseProductCount: (productId: number) => void;
    }
  | undefined
>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<IProductWithCount[]>([]);

  const allProducts: IProductWithCount[] = product_list.map((item) => ({
    ...item,
    count: 1,
  }));

  function addToCart(productId: number) {
    const clickedProduct = allProducts.find((item) => item.id === productId);
    const product = cartItems.some((item) => item.id === clickedProduct?.id);

    if (!clickedProduct) {
      toast.error("Couldn't find product!");
      return;
    }

    if (!product) {
      setCartItems((c) => [...c, clickedProduct]);
      toast.success("Product has been added to cart");
    } else {
      setCartItems((c) =>
        c.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
      toast.success("Increased product count");
    }
  }

  function removeFromCart(productId: number) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.success("Product has been removed from cart");
  }

  function increaseProductCount(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);

    setCartItems((c) =>
      c.map((item) =>
        item.id === clickedProduct?.id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  function decreaseProductCount(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);

    setCartItems((c) =>
      c.map((item) =>
        item.id === clickedProduct?.id
          ? { ...item, count: Math.max(1, item.count - 1) }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseProductCount,
        decreaseProductCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export interface IProductWithCount extends IProduct {
  count: number;
}
