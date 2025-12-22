export interface PriceDate {
  date: string
  price: number
  available: boolean
}

export interface Tour {
  id: string
  title: string
  destination: string
  country: string
  duration: number
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  description: string
  fullDescription?: string
  rating: number
  reviewsCount: number
  departure: string
  departureCity?: string
  hotel?: string
  hotelRating?: number
  mealType?: string
  transport?: string
  included: string[]
  notIncluded?: string[]
  category: 'beach' | 'excursion' | 'ski' | 'city' | 'cruise' | 'adventure'
  featured?: boolean
  discount?: number
  priceCalendar?: PriceDate[]
  availableDates?: string[]
}

