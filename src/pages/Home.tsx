import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Headphones, Flame, Tag } from 'lucide-react'
import TourCard from '../components/TourCard'
import { tours, getHotTours } from '../data/tours'

const Home = () => {
  const featuredTours = tours.filter(tour => tour.featured).slice(0, 6)
  const hotTours = getHotTours().slice(0, 3)
  const promotions = tours.filter(tour => tour.featured || (tour.discount && tour.discount >= 15)).slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Откройте мир путешествий с ТвойТур
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Мы предлагаем лучшие туры по всему миру. От пляжного отдыха до экстремальных приключений - 
              найдите идеальное путешествие для себя.
            </p>
            <Link to="/tours" className="btn-primary inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100">
              <span>Найти тур</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Лучшие предложения</h3>
              <p className="text-gray-600">
                Тщательно отобранные туры от проверенных операторов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600">
                Гарантия качества и безопасность вашего отдыха
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Наши менеджеры всегда готовы помочь вам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Tours */}
      {hotTours.length > 0 && (
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Flame className="w-8 h-8 text-orange-500" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">Горящие туры</h2>
                  <p className="text-gray-600">Специальные предложения с максимальными скидками</p>
                </div>
              </div>
              <Link to="/hot-tours" className="hidden md:block btn-secondary">
                Все горящие туры
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link to="/hot-tours" className="btn-primary">
                Все горящие туры
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Популярные туры</h2>
              <p className="text-gray-600">Самые востребованные предложения этого сезона</p>
            </div>
            <Link to="/tours" className="hidden md:block btn-secondary">
              Все туры
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/tours" className="btn-primary">
              Все туры
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      {promotions.length > 0 && (
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Tag className="w-8 h-8 text-primary-600" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">Акции и спецпредложения</h2>
                  <p className="text-gray-600">Лучшие предложения для вашего отдыха</p>
                </div>
              </div>
              <Link to="/promotions" className="hidden md:block btn-secondary">
                Все акции
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link to="/promotions" className="btn-primary">
                Все акции
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы отправиться в путешествие?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Свяжитесь с нашими менеджерами в Telegram или WhatsApp для консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/marytourism"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Написать в Telegram</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/66903316008"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Написать в WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

