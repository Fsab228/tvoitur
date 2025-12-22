import { useParams, useNavigate } from 'react-router-dom'
import { MapPin, Clock, Star, Utensils, Plane, Check, X, MessageCircle } from 'lucide-react'
import { tours } from '../data/tours'
import PriceCalendar from '../components/PriceCalendar'

const TourDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const tour = tours.find((t) => t.id === id)

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Тур не найден</h1>
        <button onClick={() => navigate('/tours')} className="btn-primary">
          Вернуться к каталогу
        </button>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    // Пытаемся использовать локальное изображение
    const localPath = `/images/tours/${tour.id}.jpg`
    if (target.src !== localPath && !target.src.includes('placeholder')) {
      target.src = localPath
    } else {
      target.src = `https://via.placeholder.com/800x600/E5E7EB/9CA3AF?text=${encodeURIComponent(tour.destination)}`
    }
  }
  
  const getImageSrc = (imageUrl?: string) => {
    if (imageUrl) {
      return imageUrl
    }
    // Пытаемся использовать локальное изображение
    const localPath = `/images/tours/${tour.id}.jpg`
    return tour.image || localPath
  }

  const handleBookTour = () => {
    const message = encodeURIComponent(
      `Здравствуйте! Меня интересует тур: ${tour.title}\nЦена: от ${formatPrice(tour.price)} ₽\nДлительность: ${tour.duration} дней`
    )
    
    window.open(`https://t.me/marytourism?text=${message}`, '_blank')
  }

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={getImageSrc()}
          alt={tour.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{tour.destination}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration} дней</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-gray-300">({tour.reviewsCount} отзывов)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Описание тура</h2>
              <p className="text-gray-700 leading-relaxed">
                {tour.fullDescription || tour.description}
              </p>
            </section>

            {/* Images Gallery */}
            {tour.images && tour.images.length > 1 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Фотогалерея</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={getImageSrc(img)}
                      alt={`${tour.title} - фото ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                      onError={handleImageError}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Price Calendar */}
            {tour.priceCalendar && tour.priceCalendar.length > 0 && (
              <section className="mb-8">
                <PriceCalendar priceCalendar={tour.priceCalendar} basePrice={tour.price} />
              </section>
            )}

            {/* Included/Not Included */}
            <section className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Check className="w-6 h-6 text-green-600" />
                    <span>Включено в стоимость</span>
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {tour.notIncluded && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                      <X className="w-6 h-6 text-red-600" />
                      <span>Не включено</span>
                    </h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {/* Price */}
              <div className="mb-6">
                {tour.originalPrice && (
                  <p className="text-gray-400 line-through text-lg mb-2">
                    {formatPrice(tour.originalPrice)} ₽
                  </p>
                )}
                <p className="text-4xl font-bold text-primary-600 mb-2">
                  от {formatPrice(tour.price)} ₽
                </p>
                {tour.discount && (
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Скидка {tour.discount}%
                  </span>
                )}
              </div>

              {/* Tour Details */}
              <div className="space-y-4 mb-6 border-t pt-6">
                {tour.departure && (
                  <div className="flex items-center space-x-3">
                    <Plane className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Вылет из</p>
                      <p className="font-semibold">{tour.departure}</p>
                    </div>
                  </div>
                )}
                {tour.hotel && (
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Отель</p>
                      <p className="font-semibold">{tour.hotel}</p>
                    </div>
                  </div>
                )}
                {tour.mealType && (
                  <div className="flex items-center space-x-3">
                    <Utensils className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Питание</p>
                      <p className="font-semibold">{tour.mealType}</p>
                    </div>
                  </div>
                )}
                {tour.transport && (
                  <div className="flex items-center space-x-3">
                    <Plane className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Транспорт</p>
                      <p className="font-semibold">{tour.transport}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBookTour}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Забронировать через Telegram</span>
                </button>
                <a
                  href={`https://wa.me/66903316008?text=${encodeURIComponent(`Здравствуйте! Меня интересует тур: ${tour.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Забронировать через WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail

