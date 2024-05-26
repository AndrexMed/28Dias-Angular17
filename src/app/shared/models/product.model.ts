export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
  discount: boolean;
  qty: number;
  subTotal: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Rating {
  rate: number;
  count: number;
}
