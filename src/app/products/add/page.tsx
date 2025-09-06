'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar.js';
import ProductForm from '@/components/ProductForm.js';
import { useUser } from '@/lib/user-context';
import { useProducts } from '@/lib/products-context';

interface ProductData {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function AddProduct() {
  const router = useRouter();
  const { user, isLoggedIn } = useUser();
  const { addProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    // Give a moment for user context to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (productData: ProductData) => {
    if (!user) {
      alert('Please log in to add a product');
      return;
    }

    // Add the product with user information
    const productWithUser = {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      category: productData.category,
      imageUrl: productData.imageUrl,
      createdBy: user.email
    };

    addProduct(productWithUser);

    alert(`Product "${productData.title}" added successfully!`);
    router.push('/products');
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <div className="text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  // Not logged in state - show login prompt
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-3xl font-bold text-primary-600 mb-2">EcoFinds</h1>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add New Product</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign In Required</h3>
                  <p className="text-gray-600 mb-6">
                    Please sign in to add new eco-friendly products to our marketplace.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleLoginRedirect}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                  >
                    Sign In to Add Product
                  </button>
                  
                  <div className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
                      Sign up here
                    </Link>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href="/products" 
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      ← Browse existing products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Product</h1>
          
          <ProductForm onSubmit={handleSubmit} />
          
          <button
            onClick={() => router.back()}
            className="w-full mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
