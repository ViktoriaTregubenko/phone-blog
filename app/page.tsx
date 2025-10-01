import Link from 'next/link';
import { phones } from './data/phones';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Блог о смартфонах</h1>
              <p className="text-gray-400 text-sm mt-1">Обзоры последних моделей смартфонов</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                Dark Mode
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Добро пожаловать в мир <span className="text-purple-400">технологий</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Откройте для себя самые инновационные смартфоны на рынке. 
            Глубокий анализ, честные обзоры и актуальные цены.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {phones.map((phone) => (
            <Link 
              key={phone.id} 
              href={`/phone/${phone.id}`}
              className="group"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-purple-500/50 hover-lift">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <span className="text-gray-400 text-lg relative z-10 group-hover:text-white transition-colors">
                    📸 {phone.title}
                  </span>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-gray-700/80 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {phone.brand}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {phone.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {phone.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{phone.price}</span>
                    <span className="text-gray-500 text-sm bg-gray-700/50 px-2 py-1 rounded">
                      {phone.releaseDate}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover-lift">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="text-white font-semibold mb-2">Детальный анализ</h3>
            <p className="text-gray-400 text-sm">Подробные обзоры всех характеристик и возможностей</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover-lift">
            <div className="text-2xl mb-3">💰</div>
            <h3 className="text-white font-semibold mb-2">Актуальные цены</h3>
            <p className="text-gray-400 text-sm">Самые свежие ценовые предложения от официальных дилеров</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover-lift">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Сравнение</h3>
            <p className="text-gray-400 text-sm">Прямое сравнение моделей для легкого выбора</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800/80 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Блог о смартфонах</h3>
              <p className="text-gray-400 text-sm">Технологии будущего уже сегодня</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © 2025. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}