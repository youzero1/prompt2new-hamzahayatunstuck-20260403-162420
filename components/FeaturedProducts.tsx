import Link from 'next/link';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link
            href="/products"
            className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
