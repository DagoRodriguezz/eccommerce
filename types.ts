
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  hasFreeShipping: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: string[];
}

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}
