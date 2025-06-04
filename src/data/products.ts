
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    category: "Smartphones",
    rating: 4.8,
    reviews: 2547,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "MacBook Pro 16-inch",
    price: 2399,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    category: "Laptops",
    rating: 4.9,
    reviews: 1823,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 399,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    category: "Headphones",
    rating: 4.7,
    reviews: 3921,
    inStock: true
  },
  {
    id: 4,
    name: "Canon EOS R5",
    price: 3899,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    category: "Cameras",
    rating: 4.9,
    reviews: 892,
    inStock: true
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    category: "Tablets",
    rating: 4.8,
    reviews: 1547,
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 6",
    price: 329,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.6,
    reviews: 2156,
    inStock: true
  },
  {
    id: 7,
    name: "PlayStation 5",
    price: 499,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    category: "Gaming",
    rating: 4.9,
    reviews: 4312,
    inStock: false
  },
  {
    id: 8,
    name: "Dell XPS 13",
    price: 1299,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    category: "Laptops",
    rating: 4.7,
    reviews: 987,
    inStock: true
  }
];

export const categories = [
  {
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop",
    count: 45
  },
  {
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    count: 32
  },
  {
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
    count: 28
  },
  {
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
    count: 19
  },
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=200&fit=crop",
    count: 24
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    count: 67
  }
];
