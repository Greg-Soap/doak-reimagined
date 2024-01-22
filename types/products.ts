export interface IProduct {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
  discount_price?: number;
  badge?: "sale" | "best seller";
}
