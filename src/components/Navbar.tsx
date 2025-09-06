import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/products" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">EcoFinds</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Cart
            </Link>
            <Link 
              href="/products/add" 
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Add Product
            </Link>
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
