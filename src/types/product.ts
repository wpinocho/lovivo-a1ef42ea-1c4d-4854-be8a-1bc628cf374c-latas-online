export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  size: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}