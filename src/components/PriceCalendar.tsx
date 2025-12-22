import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { PriceDate } from '../types/tour'

interface PriceCalendarProps {
  priceCalendar?: PriceDate[]
  basePrice: number
}

const PriceCalendar = ({ priceCalendar, basePrice }: PriceCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  if (!priceCalendar || priceCalendar.length === 0) {
    return null
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.getDate()
  }

  const getMonthDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: Array<{ date: Date; price?: number; available?: boolean }> = []

    // Пустые ячейки для дней предыдущего месяца
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ date: new Date(year, month, -i) })
    }

    // Дни текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateString = date.toISOString().split('T')[0]
      const priceData = priceCalendar.find((p) => p.date === dateString)
      
      days.push({
        date,
        price: priceData?.price,
        available: priceData?.available
      })
    }

    return days
  }

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const days = getMonthDays()
  const minPrice = Math.min(...priceCalendar.map(p => p.price))
  const maxPrice = Math.max(...priceCalendar.map(p => p.price))

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-primary-600" />
          <span>Календарь цен</span>
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold min-w-[150px] text-center">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Цены от <span className="font-semibold text-primary-600">{formatPrice(minPrice)} ₽</span> до{' '}
        <span className="font-semibold text-primary-600">{formatPrice(maxPrice)} ₽</span>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
        {days.map((dayData, idx) => {
          const isCurrentMonth = dayData.date.getMonth() === currentMonth.getMonth()
          const isToday = dayData.date.toDateString() === new Date().toDateString()
          
          return (
            <div
              key={idx}
              className={`
                p-2 rounded-lg text-center min-h-[60px] flex flex-col items-center justify-center
                ${!isCurrentMonth ? 'text-gray-300' : ''}
                ${dayData.available === false ? 'bg-gray-100 text-gray-400' : ''}
                ${dayData.available && isCurrentMonth ? 'bg-primary-50 hover:bg-primary-100 cursor-pointer' : ''}
                ${isToday && isCurrentMonth ? 'ring-2 ring-primary-500' : ''}
              `}
            >
              <span className={`text-sm ${isCurrentMonth ? 'font-semibold' : ''}`}>
                {formatDate(dayData.date.toISOString())}
              </span>
              {dayData.price && dayData.available && (
                <span className="text-xs font-bold text-primary-600 mt-1">
                  {formatPrice(dayData.price)} ₽
                </span>
              )}
              {dayData.available === false && (
                <span className="text-xs text-gray-400 mt-1">—</span>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        * Цены указаны за одного человека при двухместном размещении
      </div>
    </div>
  )
}

export default PriceCalendar

