'use client';

import Image from 'next/image';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/data';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
              product.badge === 'Sale'
                ? 'bg-red-500 text-white'
                : product.badge === 'New'
                ? 'bg-blue-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-green-600 font-medium mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-1">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              !product.inStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : added
                ? 'bg-green-100 text-green-700'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Added</>
            ) : (
              <><ShoppingCart className="w-4 h-4" /> Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
