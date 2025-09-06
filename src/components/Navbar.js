'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">EcoFinds</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link 
              href="/products/add" 
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
