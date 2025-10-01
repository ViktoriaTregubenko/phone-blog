import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Страница не найдена</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Извините, мы не можем найти запрашиваемую страницу. Возможно, она была перемещена или удалена.
        </p>
        <Link 
          href="/" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
        >
          <span className="mr-2">←</span>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}