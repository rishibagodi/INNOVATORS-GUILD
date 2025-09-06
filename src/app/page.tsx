import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center space-y-6 max-w-4xl animate-fade-in-up">
        <h1 className="text-6xl font-bold text-green-600 hover:scale-105 transition-transform duration-300 cursor-default">
          EcoFinds
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-700">
          Discover sustainable products and make eco-friendly choices for a better tomorrow. 
          Shop responsibly, live sustainably.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/products"
            className="btn-primary inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium text-lg transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            🌱 Browse Products
          </Link>
          <Link
            href="/login"
            className="btn-secondary inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white font-medium text-lg transition-all duration-300 ease-out hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Sign In
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="card-hover bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:shadow-gray-500/10 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up group">
            <div className="text-3xl mb-2 group-hover:scale-110 group-hover:animate-pulse-soft transition-transform duration-300">🌍</div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Sustainable products that care for our planet</p>
          </div>
          <div className="card-hover bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:shadow-gray-500/10 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl mb-2 group-hover:scale-110 group-hover:animate-pulse-soft transition-transform duration-300">⭐</div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">Quality First</h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Curated selection of high-quality items</p>
          </div>
          <div className="card-hover bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:shadow-gray-500/10 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl mb-2 group-hover:scale-110 group-hover:animate-pulse-soft transition-transform duration-300">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">Fast Delivery</h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">Quick and carbon-neutral shipping</p>
          </div>
        </div>
      </div>
    </main>
  )
}
