import { useState, useMemo } from 'react'
import TourCard from '../components/TourCard'
import FilterBar, { FilterState } from '../components/FilterBar'
import { tours } from '../data/tours'
import { LayoutGrid, List, LayoutList } from 'lucide-react'

type ViewMode = 'grid' | 'list' | 'compact'
type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'duration' | 'name'

const Tours = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: '',
    duration: '',
    country: '',
    departureCity: '',
  })
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('price-asc')

  const filteredTours = useMemo(() => {
    let result = tours

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (tour) =>
          tour.title.toLowerCase().includes(query) ||
          tour.destination.toLowerCase().includes(query) ||
          tour.country.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (filters.category) {
      result = result.filter((tour) => tour.category === filters.category)
    }

    // Price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map((v) => {
        if (v.endsWith('+')) return parseInt(v) || Infinity
        return parseInt(v) || 0
      })
      result = result.filter((tour) => {
        if (max === Infinity) return tour.price >= min
        return tour.price >= min && tour.price <= max
      })
    }

    // Duration filter
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map((v) => {
        if (v.endsWith('+')) return parseInt(v) || Infinity
        return parseInt(v) || 0
      })
      result = result.filter((tour) => {
        if (max === Infinity) return tour.duration >= min
        return tour.duration >= min && tour.duration <= max
      })
    }

    // Country filter
    if (filters.country) {
      result = result.filter((tour) => tour.country.includes(filters.country))
    }

    // Departure city filter
    if (filters.departureCity) {
      result = result.filter((tour) => 
        tour.departureCity === filters.departureCity || tour.departure === filters.departureCity
      )
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'duration':
          return a.duration - b.duration
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return result
  }, [searchQuery, filters, sortBy])

  const getGridClasses = () => {
    switch (viewMode) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      case 'list':
        return 'grid grid-cols-1 gap-6'
      case 'compact':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Каталог туров</h1>
        <p className="text-gray-600">Найдите идеальное путешествие для себя</p>
      </div>

      <FilterBar onSearch={setSearchQuery} onFilterChange={setFilters} />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="text-gray-600">
          Найдено туров: <span className="font-semibold text-primary-600">{filteredTours.length}</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Сортировка:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
              <option value="rating">По рейтингу</option>
              <option value="duration">По длительности</option>
              <option value="name">По названию</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Сетка"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Список"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded ${viewMode === 'compact' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Компактный"
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {filteredTours.length > 0 ? (
        <div className={getGridClasses()}>
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">Туры не найдены</p>
          <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </div>
  )
}

export default Tours
