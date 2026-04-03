'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Phone, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-700 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            1-800-PHARMA
          </span>
          <span>Free shipping on orders over $50</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">Rx</span>
          </div>
          <span className="text-xl font-bold text-green-700">PharmaCare</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-green-600 transition-colors">
            Products
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-green-600 transition-colors">
            Prescriptions
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-green-600 transition-colors">
            Health Tips
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-green-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/cart" className="relative text-gray-500 hover:text-green-600 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-green-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="block text-gray-700 hover:text-green-600" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/products" className="block text-gray-700 hover:text-green-600" onClick={() => setMenuOpen(false)}>Prescriptions</Link>
          <Link href="/products" className="block text-gray-700 hover:text-green-600" onClick={() => setMenuOpen(false)}>Health Tips</Link>
        </div>
      )}
    </header>
  );
}
