import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Новые направления в сезоне 2024',
      date: '15 декабря 2024',
      excerpt: 'Мы добавили новые туры в Таиланд, Мальдивы и Грецию. Специальные предложения для раннего бронирования.',
      link: '/tours'
    },
    {
      id: 2,
      title: 'Акция "Раннее бронирование" - скидка до 20%',
      date: '10 декабря 2024',
      excerpt: 'Забронируйте тур заранее и получите скидку до 20%. Действует на все направления до конца сезона.',
      link: '/promotions'
    },
    {
      id: 3,
      title: 'Обновление условий бронирования',
      date: '5 декабря 2024',
      excerpt: 'Упростили процесс бронирования. Теперь можно забронировать тур всего в несколько кликов через Telegram или WhatsApp.',
      link: '/contacts'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Новости и акции</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Следите за нашими новостями, акциями и специальными предложениями
        </p>

        <div className="space-y-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 text-gray-500 mb-3">
                <Calendar className="w-5 h-5" />
                <span>{item.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary-600">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.excerpt}</p>
              <Link
                to={item.link}
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <span>Подробнее</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-gray-700 mb-6">
            Следите за нашими акциями и новыми предложениями в Telegram
          </p>
          <a
            href="https://t.me/marytourism"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Подписаться на Telegram канал
          </a>
        </div>
      </div>
    </div>
  )
}

export default News
