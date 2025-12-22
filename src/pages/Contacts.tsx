import { Mail, MapPin, MessageCircle } from 'lucide-react'

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Адрес</h3>
              </div>
            </div>
            <p className="text-gray-700">
              Мы работаем удаленно и принимаем клиентов онлайн.<br />
              Все консультации и бронирование через Telegram и WhatsApp.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Работаем ежедневно с 9:00 до 21:00 (МСК)<br />
              Ответим в течение часа в рабочее время
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
            </div>
            <a href="mailto:info@tvoytur.ru" className="text-primary-600 hover:text-primary-700">
              info@tvoytur.ru
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Свяжитесь с нами</h2>
          <p className="text-gray-700 text-center mb-8">
            Наши менеджеры готовы ответить на все ваши вопросы и помочь выбрать идеальный тур.
            Выберите удобный способ связи:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://t.me/marytourism"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl transition-colors flex items-center space-x-4"
            >
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Telegram</h3>
                <p className="text-blue-100">@marytourism</p>
              </div>
            </a>

            <a
              href="https://wa.me/66903316008"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-colors flex items-center space-x-4"
            >
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                <p className="text-green-100">+66903316008</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Почему выбирают нас?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Индивидуальный подход к каждому клиенту</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Лучшие цены на рынке туризма</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Поддержка 24/7 во время путешествия</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Только проверенные туроператоры</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">✓</span>
              <span>Быстрое оформление документов</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contacts

