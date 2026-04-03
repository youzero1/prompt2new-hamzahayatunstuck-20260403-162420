import Link from 'next/link';

const categoryData = [
  { name: 'Vitamins & Supplements', emoji: '💊', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { name: 'Pain Relief', emoji: '🩹', color: 'bg-red-50 hover:bg-red-100' },
  { name: 'Cold & Flu', emoji: '🤧', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Skin Care', emoji: '🧴', color: 'bg-pink-50 hover:bg-pink-100' },
  { name: 'Digestive Health', emoji: '🌿', color: 'bg-green-50 hover:bg-green-100' },
  { name: 'First Aid', emoji: '🏥', color: 'bg-orange-50 hover:bg-orange-100' },
  { name: 'Baby Care', emoji: '👶', color: 'bg-purple-50 hover:bg-purple-100' },
  { name: 'Eye Care', emoji: '👁️', color: 'bg-teal-50 hover:bg-teal-100' },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {categoryData.map((cat) => (
          <Link
            key={cat.name}
            href="/products"
            className={`${cat.color} rounded-xl p-4 text-center transition-colors cursor-pointer`}
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <p className="text-xs font-medium text-gray-700 leading-tight">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
