import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

interface FilterBarProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  category: string
  priceRange: string
  duration: string
  country: string
  departureCity: string
}

const FilterBar = ({ onSearch, onFilterChange }: FilterBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: '',
    duration: '',
    country: '',
    departureCity: '',
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Поиск туров..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-secondary flex items-center space-x-2"
        >
          <Filter className="w-5 h-5" />
          <span>Фильтры</span>
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 pt-6 border-t">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Категория
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Все категории</option>
              <option value="beach">Пляжный отдых</option>
              <option value="excursion">Экскурсионные</option>
              <option value="ski">Горнолыжные</option>
              <option value="city">Городские</option>
              <option value="cruise">Круизы</option>
              <option value="adventure">Приключения</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Цена
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Любая</option>
              <option value="0-100000">До 100 000 ₽</option>
              <option value="100000-200000">100 000 - 200 000 ₽</option>
              <option value="200000-300000">200 000 - 300 000 ₽</option>
              <option value="300000+">От 300 000 ₽</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Длительность
            </label>
            <select
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Любая</option>
              <option value="1-5">1-5 дней</option>
              <option value="6-10">6-10 дней</option>
              <option value="11+">От 11 дней</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Страна
            </label>
            <select
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Все страны</option>
              <option value="Турция">Турция</option>
              <option value="Египет">Египет</option>
              <option value="ОАЭ">ОАЭ</option>
              <option value="Таиланд">Таиланд</option>
              <option value="Греция">Греция</option>
              <option value="Испания">Испания</option>
              <option value="Италия">Италия</option>
              <option value="Франция">Франция</option>
              <option value="Швейцария">Швейцария</option>
              <option value="Мальдивы">Мальдивы</option>
              <option value="Кения">Кения</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Город вылета
            </label>
            <select
              value={filters.departureCity}
              onChange={(e) => handleFilterChange('departureCity', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Все города</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Екатеринбург">Екатеринбург</option>
              <option value="Новосибирск">Новосибирск</option>
              <option value="Казань">Казань</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterBar

