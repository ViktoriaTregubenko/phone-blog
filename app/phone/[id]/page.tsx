import { phones } from '../../data/phones';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return phones.map((phone) => ({
    id: phone.id.toString(),
  }));
}

interface PhonePageProps {
  params: {
    id: string;
  };
}

export default function PhonePage({ params }: PhonePageProps) {
  const phone = phones.find(p => p.id === parseInt(params.id));

  if (!phone) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-2 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Назад к каталогу
          </Link>
          <h1 className="text-3xl font-bold text-white">{phone.title}</h1>
          <p className="text-gray-400">{phone.brand}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
          <div className="h-80 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
            <span className="text-gray-300 text-2xl relative z-10">📸 {phone.title}</span>
            <div className="absolute top-4 right-4">
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                {phone.brand}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-4xl font-bold text-white mb-2">{phone.title}</h2>
                <p className="text-gray-400 text-lg">{phone.brand}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400 mb-2">{phone.price}</div>
                <div className="text-gray-500 bg-gray-700/50 px-3 py-1 rounded-full inline-block">
                  Год выпуска: {phone.releaseDate}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">{phone.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Характеристики
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phone.specs.map((spec, index) => (
                  <li key={index} className="flex items-center bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:border-purple-500/30 transition-colors">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-200">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl p-6 border border-purple-500/20">
              <h4 className="font-semibold text-purple-400 mb-3 text-lg flex items-center">
                💡 Интересный факт
              </h4>
              <p className="text-gray-300">
                {phone.brand} продолжает удивлять инновациями в каждом новом поколении смартфонов, 
                предлагая пользователям передовые технологии и премиальный опыт использования.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Другие модели</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {phones
              .filter(p => p.id !== phone.id)
              .slice(0, 3)
              .map((relatedPhone) => (
                <Link key={relatedPhone.id} href={`/phone/${relatedPhone.id}`}>
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <h4 className="text-white font-semibold mb-2">{relatedPhone.title}</h4>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{relatedPhone.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-bold">{relatedPhone.price}</span>
                      <span className="text-gray-500 text-xs bg-gray-700/50 px-2 py-1 rounded">
                        {relatedPhone.brand}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800/50 border-t border-gray-700/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              © 2025 Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}