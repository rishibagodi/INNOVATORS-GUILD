'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar.js';
import ProductForm from '@/components/ProductForm.js';

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

  const handleSubmit = (productData: ProductData) => {
    console.log('New product data:', productData);
    alert('Product added successfully! (Check console for data)');
    // TODO: Implement actual product creation logic
    router.push('/products');
  };

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
