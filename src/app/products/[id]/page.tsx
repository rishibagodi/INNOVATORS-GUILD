'use client';

import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { DUMMY_PRODUCTS } from '@/lib/dummy-data';

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = use(params);
  const product = DUMMY_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);
    alert(`Added "${product.title}" to cart!`);
    // TODO: Implement actual cart functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h1>
                  <p className="text-4xl font-bold text-primary-600 mb-6">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Features
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Eco-friendly and sustainable materials</li>
                    <li>• High quality construction</li>
                    <li>• 30-day money-back guarantee</li>
                    <li>• Carbon-neutral shipping</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 font-medium text-lg transition-colors"
                >
                  Add to Cart
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium">
                    Add to Wishlist
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sustainability Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                -50%
              </div>
              <p className="text-gray-700">Carbon Footprint</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <p className="text-gray-700">Recyclable Materials</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                5★
              </div>
              <p className="text-gray-700">Eco Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
