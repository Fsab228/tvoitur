import { Star } from 'lucide-react'
import { Tour } from '../types/tour'

interface HotelCardProps {
  tour: Tour
}

const HotelCard = ({ tour }: HotelCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    // Если изображение уже из Unsplash, не пытаемся снова
    if (target.src.includes('unsplash')) {
      return
    }
    const localPath = `/images/tours/${tour.id}.jpg`
    if (target.src !== localPath && !target.src.includes('unsplash')) {
      target.src = localPath
    } else {
      // Используем реальное изображение из Unsplash вместо placeholder
      target.src = getImageSrc()
    }
  }

  const getImageSrc = () => {
    // Если есть изображение в данных тура, используем его
    if (tour.image) {
      return tour.image
    }
    
    // Для семейных отелей используем подходящие изображения
    if (tour.hotel?.includes('Family') || tour.hotel?.includes('Costa del Sol')) {
      return 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=80'
    }
    
    // Для премиум отелей
    if (tour.hotelRating === 5 || tour.price > 200000) {
      return 'https://images.unsplash.com/photo-1551882547-ec40e7b5b0d8?w=800&h=600&fit=crop&q=80'
    }
    
    // Для бюджетных отелей
    if (tour.price < 80000) {
      return 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&q=80'
    }
    
    // Дефолтное изображение курорта
    return 'https://images.unsplash.com/photo-1540541338287-003002d531db?w=800&h=600&fit=crop&q=80'
  }

  // Генерируем звезды рейтинга
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
      )
    }
    if (hasHalfStar && fullStars < 5) {
      stars.push(
        <Star key="half" className="w-5 h-5 text-orange-500 fill-orange-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      )
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-orange-500" />
      )
    }
    return stars
  }

  return (
    <div className="card bg-white rounded-xl overflow-hidden" style={{ filter: 'none' }}>
      {/* Изображение отеля */}
      <div className="relative w-full h-[180px] overflow-hidden rounded-t-xl" style={{ filter: 'none' }}>
        <img
          src={getImageSrc()}
          alt={tour.hotel || tour.title}
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'none',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'visible',
            backfaceVisibility: 'visible'
          }}
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <div className="p-6">
        {/* Заголовок с локацией */}
        <div className="text-sm text-gray-500 mb-2">
          {tour.country?.toUpperCase()}, {tour.destination?.toUpperCase()} • {tour.duration} НОЧЕЙ • {tour.mealType?.toUpperCase()}
        </div>

        {/* Название отеля */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {tour.hotel || tour.title}
        </h3>

        {/* Рейтинг */}
        <div className="flex items-center gap-1 mb-6">
          {renderStars(tour.hotelRating || tour.rating)}
        </div>

        {/* Что это за отель */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Что это за отель</h4>
          <ul className="space-y-2 text-gray-700">
            {tour.country === 'Испания' && tour.hotel?.includes('Costa del Sol Family') ? (
              <>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Курортный отель у моря</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Территория средняя</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Пляж через променад (2 минуты)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Детская площадка и мини-клуб</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Отель {tour.hotelRating || tour.rating} звезд</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Расположен в {tour.destination}</span>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Питание */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Питание</h4>
          <ul className="space-y-2 text-gray-700">
            {tour.mealType === 'Завтраки' && tour.hotel?.includes('Costa del Sol Family') ? (
              <>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Завтрак шведский стол</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Обед и ужин — в ресторанах города или отеля за доплату</span>
                </li>
              </>
            ) : (
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{tour.mealType}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Как проходит отдых */}
        {tour.hotel?.includes('Costa del Sol Family') && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Как проходит отдых</h4>
            <p className="text-gray-700">
              Спокойный формат. Подходит семьям, которые хотят совмещать пляж с прогулками и поездками по побережью.
            </p>
          </div>
        )}

        {/* Цена */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-baseline justify-between">
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
    </div>
  )
}

export default HotelCard

