import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Coca-Cola Original',
    description: 'La bebida refrescante clásica con el sabor original que todos conocen y aman.',
    price: 1.50,
    originalPrice: 2.00,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
    category: 'Refrescos',
    brand: 'Coca-Cola',
    size: '355ml',
    inStock: true,
    rating: 4.8,
    reviews: 1250,
    tags: ['popular', 'clásico']
  },
  {
    id: '2',
    name: 'Pepsi Cola',
    description: 'El sabor refrescante y audaz que desafía tus sentidos.',
    price: 1.45,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop',
    category: 'Refrescos',
    brand: 'Pepsi',
    size: '355ml',
    inStock: true,
    rating: 4.6,
    reviews: 980,
    tags: ['refrescante']
  },
  {
    id: '3',
    name: 'Red Bull Energy',
    description: 'La bebida energética que te da alas. Perfecta para momentos de alta demanda.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop',
    category: 'Energéticas',
    brand: 'Red Bull',
    size: '250ml',
    inStock: true,
    rating: 4.7,
    reviews: 2100,
    tags: ['energía', 'deporte']
  },
  {
    id: '4',
    name: 'Sprite Limón',
    description: 'Refresco de lima-limón con burbujas refrescantes y sabor cítrico.',
    price: 1.40,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop',
    category: 'Refrescos',
    brand: 'Sprite',
    size: '355ml',
    inStock: true,
    rating: 4.5,
    reviews: 750,
    tags: ['cítrico', 'refrescante']
  },
  {
    id: '5',
    name: 'Monster Energy',
    description: 'Bebida energética con sabor intenso para liberar la bestia que llevas dentro.',
    price: 2.75,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'Energéticas',
    brand: 'Monster',
    size: '473ml',
    inStock: true,
    rating: 4.4,
    reviews: 1800,
    tags: ['energía', 'intenso']
  },
  {
    id: '6',
    name: 'Fanta Naranja',
    description: 'El sabor dulce y burbujeante de la naranja en cada sorbo.',
    price: 1.35,
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=400&fit=crop',
    category: 'Refrescos',
    brand: 'Fanta',
    size: '355ml',
    inStock: false,
    rating: 4.3,
    reviews: 650,
    tags: ['frutal', 'dulce']
  },
  {
    id: '7',
    name: 'Cerveza Corona',
    description: 'Cerveza ligera y refrescante, perfecta para acompañar cualquier momento.',
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
    category: 'Cervezas',
    brand: 'Corona',
    size: '355ml',
    inStock: true,
    rating: 4.6,
    reviews: 1450,
    tags: ['cerveza', 'ligera']
  },
  {
    id: '8',
    name: 'Agua Mineral Evian',
    description: 'Agua mineral natural de los Alpes franceses, pura y refrescante.',
    price: 1.80,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    category: 'Agua',
    brand: 'Evian',
    size: '500ml',
    inStock: true,
    rating: 4.9,
    reviews: 890,
    tags: ['natural', 'pura']
  }
];

export const categories = ['Todos', 'Refrescos', 'Energéticas', 'Cervezas', 'Agua'];
export const brands = ['Todos', 'Coca-Cola', 'Pepsi', 'Red Bull', 'Sprite', 'Monster', 'Fanta', 'Corona', 'Evian'];