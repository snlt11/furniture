export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithWithChildren extends NavItem {
  card?: NavItemWithWithChildren[];
  menu?: NavItemWithWithChildren[];
}

export type MainNavItem = NavItemWithWithChildren;

export type Image = {
  id: string;
  path: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  images: Image[];
  categoryId: string;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Tag = {
  name: string;
};

export type Post = {
  id: string;
  author: string;
  images: Image[];
  title: string;
  content: string;
  image: string;
  body: string;
  updated_at: string;
  tags: Tag[];
};

export type Category = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type Cart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
