'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useUser } from '@/lib/user-context';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const { user } = useUser();
  const itemCount = getTotalItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Image
                src="/ecofinds-logo.svg"
                alt="EcoFinds Logo"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <h1 className="text-lg sm:text-2xl font-bold text-green-600">EcoFinds</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/products" 
              className="nav-link text-gray-700 hover:text-green-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95"
            >
              Products
            </Link>
            <Link 
              href="/cart" 
              className="nav-link text-gray-700 hover:text-green-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95 relative"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft transition-all duration-300 hover:scale-110">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link 
              href="/products/add" 
              className="btn-secondary text-gray-700 hover:text-white hover:bg-green-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-green-600 transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95"
            >
              <span className="hidden lg:inline">Add Product</span>
              <span className="lg:hidden">Add</span>
            </Link>
            
            {/* User Dashboard Link */}
            <Link 
              href="/dashboard" 
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-95"
            >
              <Image
                src={user?.profileImage || '/placeholder.png'}
                alt="User Profile"
                width={32}
                height={32}
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-gray-200 hover:border-green-300 transition-all duration-300 object-cover hover:scale-110 hover:shadow-lg"
              />
              <span className="hidden lg:inline">
                {user ? 'Profile' : 'Sign In'}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Cart Icon for Mobile */}
            <Link href="/cart" className="relative p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🛍️ Products
            </Link>
            <Link
              href="/products/add"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ➕ Add Product
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              👤 {user ? 'Profile' : 'Sign In'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
