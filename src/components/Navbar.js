'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { useUser } from '@/lib/user-context';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const { user } = useUser();
  const itemCount = getTotalItems();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Image
                src="/ecofinds-logo.svg"
                alt="EcoFinds Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-primary-600">EcoFinds</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
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
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-gray-300 hover:border-primary-600"
            >
              Add Product
            </Link>
            
            {/* User Dashboard Link with Profile Image */}
            <Link 
              href="/dashboard" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Image
                src={user?.profileImage || '/placeholder.png'}
                alt="User Profile"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-primary-300 transition-colors object-cover"
              />
              <span className="hidden sm:inline">
                {user ? 'Profile' : 'Sign In'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
