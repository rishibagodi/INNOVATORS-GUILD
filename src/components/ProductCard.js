import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

export default function ProductCard({ id, title, price, imageUrl }) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md overflow-hidden card-hover transition-all duration-300 ease-out hover:shadow-xl hover:shadow-gray-500/10 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up">
      <Link href={`/products/${id}`} className="group block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || '/placeholder.png'}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 mb-2 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xl font-bold text-green-600 mb-3 group-hover:scale-105 transition-transform duration-200">
            {formatPrice(price)}
          </p>
          <button className="btn-primary w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition-all duration-300 ease-out hover:shadow-lg hover:shadow-green-500/25 active:scale-95 hover:-translate-y-0.5">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
}
