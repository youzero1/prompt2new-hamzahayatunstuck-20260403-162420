import Link from 'next/link';

export default function PromoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Promo Card 1 */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute right-4 bottom-0 text-9xl opacity-20">💊</div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Limited Time</span>
          <h3 className="text-2xl font-bold mt-3 mb-2">20% Off Vitamins</h3>
          <p className="text-green-100 mb-4">Stock up on your daily essentials and save big this month.</p>
          <Link
            href="/products"
            className="inline-block bg-white text-green-700 font-semibold px-5 py-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            Shop Vitamins
          </Link>
        </div>

        {/* Promo Card 2 */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute right-4 bottom-0 text-9xl opacity-20">🩺</div>
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">New Service</span>
          <h3 className="text-2xl font-bold mt-3 mb-2">Online Consultation</h3>
          <p className="text-blue-100 mb-4">Get expert advice from our licensed pharmacists 24/7.</p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-8 bg-gray-800 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Healthy, Stay Informed</h3>
        <p className="text-gray-400 mb-6">Subscribe to our newsletter for health tips and exclusive offers.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
