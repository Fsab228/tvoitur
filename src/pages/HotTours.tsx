import { Link } from 'react-router-dom'
import { getHotTours } from '../data/tours'
import TourCard from '../components/TourCard'
import { Flame } from 'lucide-react'

const HotTours = () => {
  const hotTours = getHotTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Flame className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold">Горящие туры</h1>
        </div>
        <p className="text-gray-600">Специальные предложения с максимальными скидками</p>
      </div>

      {hotTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">Горящих туров пока нет</p>
          <Link to="/tours" className="text-primary-600 hover:text-primary-700 underline">
            Посмотреть все туры
          </Link>
        </div>
      )}
    </div>
  )
}

export default HotTours

