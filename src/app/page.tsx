import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-6xl font-bold text-primary-600">
          EcoFinds
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover sustainable products and make eco-friendly choices for a better tomorrow. 
          Shop responsibly, live sustainably.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 font-medium text-lg transition-colors shadow-md"
          >
            🌱 Browse Products
          </Link>
          <Link
            href="/login"
            className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 font-medium text-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">Sustainable products that care for our planet</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600 text-sm">Curated selection of high-quality items</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Quick and carbon-neutral shipping</p>
          </div>
        </div>
      </div>
    </main>
  )
}
