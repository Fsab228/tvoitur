import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании - как на pegast.ru */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/vacancies" className="hover:text-white transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
            </ul>
          </div>

          {/* Туры */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Туры</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/tours" className="hover:text-white transition-colors">
                  Все туры
                </Link>
              </li>
              <li>
                <Link to="/hot-tours" className="hover:text-white transition-colors">
                  Горящие туры
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-white transition-colors">
                  Акции
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/how-to-book" className="hover:text-white transition-colors">
                  Как забронировать
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-white transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-white transition-colors">
                  Документы
                </Link>
              </li>
              <li>
                <Link to="/visa-support" className="hover:text-white transition-colors">
                  Визовая поддержка
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://t.me/marytourism"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/66903316008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ТвойТур. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
