import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function ProductCard({ id, title, price, category, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600">
              {title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">{category}</p>
          <p className="text-xl font-bold text-primary-600">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
