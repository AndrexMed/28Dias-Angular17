export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  rating: Rating,
  discount: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Rating{
  rate: number;
  count: number;
}