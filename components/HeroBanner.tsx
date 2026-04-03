import Link from 'next/link';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Your Health, Our Priority
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Trusted <br />
              <span className="text-green-600">Online Pharmacy</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Shop from thousands of medications, vitamins, and health products.
              Fast delivery, competitive prices, and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                View Prescriptions
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-2">💊</div>
                <p className="text-green-700 font-bold text-xl">PharmaCare</p>
                <p className="text-gray-500 text-sm">Est. 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Licensed Pharmacy</p>
              <p className="text-sm text-gray-500">Board certified pharmacists</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Truck className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Fast Delivery</p>
              <p className="text-sm text-gray-500">Same-day & next-day options</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">24/7 Support</p>
              <p className="text-sm text-gray-500">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
