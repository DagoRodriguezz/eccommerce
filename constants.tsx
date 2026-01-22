
import { Product, NavItem } from './types';

export const COLORS = {
  primary: '#2563eb', // Blue-600
  dark: '#0f172a',    // Navy Dark
};

export const NAVIGATION: NavItem[] = [
  { label: 'Inicio', href: '#', hasDropdown: false },
  { 
    label: 'Tenis', 
    href: '#', 
    hasDropdown: true,
    subItems: ['Todos', 'Hombres', 'Mujeres', 'Unisex']
  },
  { 
    label: 'Marcas', 
    href: '#', 
    hasDropdown: true,
    subItems: ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Yeezy', 'Puma']
  },
  { label: 'Promociones', href: '#', hasDropdown: false },
  { label: 'Mis pedidos', href: '#', hasDropdown: false },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AIR JORDAN 1 RETRO BLUE',
    brand: 'Jordan',
    price: 389000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=600',
    hasFreeShipping: true,
  },
  {
    id: '2',
    name: 'NIKE DUNK LOW PANDA',
    brand: 'Nike',
    price: 299000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=600',
    hasFreeShipping: true,
  },
  {
    id: '3',
    name: 'ADIDAS FORUM EXHIBIT',
    brand: 'Adidas',
    price: 310000,
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=600',
    hasFreeShipping: true,
  },
  {
    id: '4',
    name: 'NEW BALANCE 550 WHITE/NAVY',
    brand: 'New Balance',
    price: 345000,
    originalPrice: 480000,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600',
    hasFreeShipping: true,
  },
  {
      id: '5',
      name: 'NIKE AIR FORCE 1 LOW',
      brand: 'Nike',
      price: 285000,
      originalPrice: 380000,
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600',
      hasFreeShipping: true,
  },
  {
      id: '6',
      name: 'JORDAN 4 BRED REIMAGINED',
      brand: 'Jordan',
      price: 450000,
      originalPrice: 620000,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600',
      hasFreeShipping: true,
  }
];
