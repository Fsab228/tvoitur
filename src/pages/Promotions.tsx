import { Link } from 'react-router-dom'
import { tours } from '../data/tours'
import TourCard from '../components/TourCard'
import { Tag } from 'lucide-react'

const Promotions = () => {
  // Туры с акциями (скидки и featured)
  const promotions = tours.filter(tour => tour.featured || (tour.discount && tour.discount >= 15))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Tag className="w-8 h-8 text-primary-600" />
          <h1 className="text-4xl font-bold">Акции и спецпредложения</h1>
        </div>
        <p className="text-gray-600">Лучшие предложения для вашего отдыха</p>
      </div>

      {promotions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">Акций пока нет</p>
          <Link to="/tours" className="text-primary-600 hover:text-primary-700 underline">
            Посмотреть все туры
          </Link>
        </div>
      )}
    </div>
  )
}

export default Promotions

