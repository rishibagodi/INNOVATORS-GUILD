import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary-600">
          EcoFinds
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Discover sustainable products and make eco-friendly choices for a better tomorrow
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 font-medium text-lg transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/login"
            className="inline-block bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 font-medium text-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  )
}
