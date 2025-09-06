import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/currency';

export default function ProductCard({ id, title, price, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${id}`} className="group block">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl || '/placeholder.png'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 mb-2">
            {title}
          </h3>
          <p className="text-xl font-bold text-primary-600 mb-3">
            {formatPrice(price)}
          </p>
          <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 font-medium transition-colors">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
}
