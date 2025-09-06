'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DUMMY_PRODUCTS } from './dummy-data';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  createdBy?: string; // Email of the user who created it
  createdAt?: string; // Timestamp when created
}

interface ProductsContextType {
  products: Product[];
  userProducts: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  getAllProducts: () => Product[];
  getUserProducts: (userEmail: string) => Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [userProducts, setUserProducts] = useState<Product[]>([]);

  // Load user products from localStorage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('ecofinds-user-products');
    if (storedProducts) {
      setUserProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Save user products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('ecofinds-user-products', JSON.stringify(userProducts));
  }, [userProducts]);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString()
    };

    setUserProducts(prev => [...prev, newProduct]);
  };

  const getAllProducts = (): Product[] => {
    // Combine dummy products with user-created products
    return [...DUMMY_PRODUCTS, ...userProducts];
  };

  const getUserProducts = (userEmail: string): Product[] => {
    return userProducts.filter(product => product.createdBy === userEmail);
  };

  const value = {
    products: getAllProducts(),
    userProducts,
    addProduct,
    getAllProducts,
    getUserProducts
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}
