export interface ItemsOrderedProps {
  image: string;
  name: string;
  price: number;
}

export interface OrderProps {
  order_number: string;
  status: "Delivered" | "Cancelled By Self" | "Failed Payment" | "Order Placed";
  items_ordered: ItemsOrderedProps[];
}

export const orders: OrderProps[] = [
  {
    order_number: "12267880",
    status: "Order Placed",
    items_ordered: [
      {
        image: "/assets/products/product-img-7.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-8.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-5.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-3.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
    ],
  },
  {
    order_number: "12267881",
    status: "Failed Payment",
    items_ordered: [
      {
        image: "/assets/products/product-img-7.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-8.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
    ],
  },
  {
    order_number: "12267882",
    status: "Cancelled By Self",
    items_ordered: [
      {
        image: "/assets/products/product-img-7.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-8.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-5.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-3.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
    ],
  },
  {
    order_number: "12267883",
    status: "Delivered",
    items_ordered: [
      {
        image: "/assets/products/product-img-7.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-8.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-5.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
      {
        image: "/assets/products/product-img-3.png",
        name: "Hennessy VS Cognac ORIGINAL 70cl X6",
        price: 200000,
      },
    ],
  },
];
