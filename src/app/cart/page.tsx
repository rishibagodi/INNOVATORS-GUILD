'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar.js';
import { useCart } from '@/lib/cart-context';
import { useUser } from '@/lib/user-context';

export default function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart();
  
  const { isLoggedIn } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const total = getTotalPrice();
  const itemCount = getTotalItems();

  // Check authentication status on component mount
  useEffect(() => {
    // Give a moment for user context to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCheckout = () => {
    console.log('Checkout with items:', cartItems);
    console.log('Total amount:', total);
    alert(`Checkout successful! Total: $${total.toFixed(2)}`);
    // TODO: Implement actual checkout logic
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Your Cart</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 5.2a1 1 0 01-.9.8H4m1-6h10m-10 0V9a1 1 0 011-1h2m0 0V7a1 1 0 011-1h2m-3 3h6" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign In Required</h3>
                  <p className="text-gray-600 mb-6">
                    Please sign in to view and manage your shopping cart items.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleLoginRedirect}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                  >
                    Sign In to View Cart
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
                      ← Continue browsing products
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Shopping Cart ({itemCount} item{itemCount !== 1 ? 's' : ''})
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      -
                    </button>
                    
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="ml-6 text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 font-medium text-lg"
              >
                Proceed to Checkout
              </button>
              
              <Link
                href="/products"
                className="block text-center mt-4 text-primary-600 hover:text-primary-500 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
