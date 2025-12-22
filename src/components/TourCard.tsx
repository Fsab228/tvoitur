import { Link } from 'react-router-dom'
import { MapPin, Clock, Star } from 'lucide-react'
import { Tour } from '../types/tour'

interface TourCardProps {
  tour: Tour
  viewMode?: 'grid' | 'list' | 'compact'
}

const TourCard = ({ tour, viewMode = 'grid' }: TourCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  // Получаем подходящее изображение в зависимости от типа тура
  const getFallbackImage = () => {
    // Для семейных туров
    if (tour.hotel?.includes('Family') || tour.hotel?.includes('Costa del Sol') || tour.price < 100000) {
      return 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=80'
    }
    // Для премиум туров
    if (tour.hotelRating === 5 || tour.price > 200000) {
      return 'https://images.unsplash.com/photo-1551882547-ec40e7b5b0d8?w=800&h=600&fit=crop&q=80'
    }
    // Для пляжных туров
    if (tour.category === 'beach') {
      return 'https://images.unsplash.com/photo-1540541338287-003002d531db?w=800&h=600&fit=crop&q=80'
    }
    // Для городских туров
    if (tour.category === 'city') {
      return 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop&q=80'
    }
    // Дефолтное изображение курорта
    return 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&q=80'
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    // Fallback: используем реальное изображение из Unsplash
    const localPath = `/images/tours/${tour.id}.jpg`
    if (target.src !== localPath && !target.src.includes('unsplash')) {
      target.src = localPath
    } else {
      // Если локальное тоже не загрузилось, используем Unsplash
      target.src = getFallbackImage()
    }
  }
  
  // Приоритет: изображение из данных > fallback Unsplash
  const getImageSrc = () => {
    // Если есть изображение в данных, используем его
    if (tour.image) {
      return tour.image
    }
    // Сразу используем fallback из Unsplash
    return getFallbackImage()
  }

  if (viewMode === 'list') {
    return (
      <Link to={`/tours/${tour.id}`} className="card group flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-80 flex-shrink-0 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <img
            src={getImageSrc()}
            alt={tour.title}
            className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
          {tour.discount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
              -{tour.discount}%
            </div>
          )}
          {tour.featured && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold text-xs">
              Хит продаж
            </div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
              {tour.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{tour.destination}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{tour.duration} дней</span>
              </div>
              {tour.hotel && (
                <div className="text-gray-600">
                  {tour.hotel}
                </div>
              )}
            </div>
            <p className="text-gray-700 mb-4 line-clamp-2">{tour.description}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-semibold">{tour.rating}</span>
              </div>
              <span className="text-gray-500 text-sm">({tour.reviewsCount} отзывов)</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              {tour.originalPrice && (
                <p className="text-gray-400 line-through text-sm">
                  {formatPrice(tour.originalPrice)} ₽
                </p>
              )}
              <p className="text-3xl font-bold text-primary-600">
                от {formatPrice(tour.price)} ₽
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (viewMode === 'compact') {
    return (
      <Link to={`/tours/${tour.id}`} className="card group">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={getImageSrc()}
            alt={tour.title}
            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
          {tour.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full font-bold text-xs">
              -{tour.discount}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1 mb-2">
            {tour.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
            <MapPin className="w-3 h-3" />
            <span>{tour.destination}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold">{tour.rating}</span>
            </div>
            <p className="text-lg font-bold text-primary-600">
              от {formatPrice(tour.price)} ₽
            </p>
          </div>
        </div>
      </Link>
    )
  }

  // Default grid view
  return (
    <Link to={`/tours/${tour.id}`} className="card group" style={{ filter: 'none' }}>
      <div className="relative overflow-hidden rounded-t-xl" style={{ filter: 'none', minHeight: '256px' }}>
        <img
          src={getImageSrc()}
          alt={tour.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          style={{
            filter: 'none',
            imageRendering: 'auto',
            display: 'block'
          }}
          onError={handleImageError}
          onLoad={(e) => {
            // Убеждаемся что изображение загрузилось
            const img = e.target as HTMLImageElement
            img.style.opacity = '1'
          }}
          loading="lazy"
        />
        {tour.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
            -{tour.discount}%
          </div>
        )}
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold text-sm">
            Хит продаж
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {tour.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{tour.destination}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{tour.duration} дней</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-semibold">{tour.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({tour.reviewsCount} отзывов)</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {tour.originalPrice && (
              <p className="text-gray-400 line-through text-sm">
                {formatPrice(tour.originalPrice)} ₽
              </p>
            )}
            <p className="text-2xl font-bold text-primary-600">
              от {formatPrice(tour.price)} ₽
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourCard
