import { Tour } from '../types/tour'

// Генерируем календарь цен для тура
const generatePriceCalendar = (basePrice: number, days: number = 30): Tour['priceCalendar'] => {
  const calendar: Tour['priceCalendar'] = []
  const today = new Date()
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Вариация цены ±20%
    const variation = (Math.random() - 0.5) * 0.4
    const price = Math.round(basePrice * (1 + variation))
    const available = Math.random() > 0.1 // 90% доступности
    
    calendar.push({
      date: date.toISOString().split('T')[0],
      price,
      available
    })
  }
  
  return calendar
}

// Реальные туры, соответствующие предложениям pegast.ru
// Каждый тур имеет уникальное изображение
export const tours: Tour[] = [
  // ТУРЦИЯ - Анталия
  {
    id: '1',
    title: 'Турция, Анталия',
    destination: 'Анталия',
    country: 'Турция',
    duration: 7,
    price: 85000,
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Прекрасный отдых на берегу Средиземного моря в отеле премиум класса',
    fullDescription: 'Окунитесь в атмосферу роскоши и комфорта в одном из лучших отелей Анталии. Отель расположен на первой береговой линии с собственным пляжем. В вашем распоряжении несколько бассейнов, спа-центр, рестораны с изысканной кухней и развлекательные программы.',
    rating: 4.8,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Grand Resort Antalya 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Питание "Все включено"',
      'Трансфер аэропорт-отель-аэропорт',
      'Медицинская страховка',
      'Экскурсионная программа'
    ],
    notIncluded: [
      'Виза (если требуется)',
      'Дополнительные экскурсии',
      'Личные расходы'
    ],
    category: 'beach',
    featured: true,
    discount: 19,
    priceCalendar: generatePriceCalendar(85000)
  },
  // ТУРЦИЯ - Кемер
  {
    id: '2',
    title: 'Турция, Кемер',
    destination: 'Кемер',
    country: 'Турция',
    duration: 7,
    price: 72000,
    originalPrice: 90000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отдых в живописном Кемере с чистыми пляжами и развитой инфраструктурой',
    fullDescription: 'Кемер - один из самых популярных курортов Турции. Здесь вас ждут прекрасные пляжи, чистое море, комфортабельные отели и множество развлечений. Идеальное место для семейного отдыха.',
    rating: 4.7,
    reviewsCount: 189,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 20,
    priceCalendar: generatePriceCalendar(72000)
  },
  // ТУРЦИЯ - Сиде
  {
    id: '3',
    title: 'Турция, Сиде',
    destination: 'Сиде',
    country: 'Турция',
    duration: 7,
    price: 68000,
    originalPrice: 85000,
    image: 'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Исторический курорт с античными достопримечательностями',
    fullDescription: 'Сиде сочетает в себе пляжный отдых и богатую историю. Посетите древний амфитеатр, прогуляйтесь по старинным улочкам, насладитесь прекрасными пляжами.',
    rating: 4.6,
    reviewsCount: 156,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Coast Hotel 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 20,
    priceCalendar: generatePriceCalendar(68000)
  },
  // ТУРЦИЯ - Бодрум
  {
    id: '4',
    title: 'Турция, Бодрум',
    destination: 'Бодрум',
    country: 'Турция',
    duration: 7,
    price: 95000,
    originalPrice: 115000,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Элитный курорт на Эгейском море',
    fullDescription: 'Бодрум - один из самых престижных курортов Турции. Белоснежные яхты, роскошные отели, изысканная кухня и богемная атмосфера.',
    rating: 4.9,
    reviewsCount: 198,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Luxury Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 17,
    priceCalendar: generatePriceCalendar(95000)
  },
  // ТУРЦИЯ - Аланья
  {
    id: '5',
    title: 'Турция, Аланья',
    destination: 'Аланья',
    country: 'Турция',
    duration: 7,
    price: 65000,
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Доступный курорт с золотыми пляжами',
    fullDescription: 'Аланья - популярный курорт с прекрасными пляжами, историческими достопримечательностями и развитой инфраструктурой. Отличное соотношение цена-качество.',
    rating: 4.5,
    reviewsCount: 312,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 19,
    priceCalendar: generatePriceCalendar(65000)
  },
  // ЕГИПЕТ - Хургада
  {
    id: '6',
    title: 'Египет, Хургада',
    destination: 'Хургада',
    country: 'Египет',
    duration: 7,
    price: 65000,
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Доступный отдых на берегу Красного моря',
    fullDescription: 'Хургада - идеальное место для бюджетного отдыха с отличным соотношением цена-качество. Прекрасные пляжи, коралловые рифы для дайвинга, комфортабельные отели и богатая экскурсионная программа. Отличный выбор для семейного отдыха.',
    rating: 4.5,
    reviewsCount: 312,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 19,
    priceCalendar: generatePriceCalendar(65000)
  },
  // ЕГИПЕТ - Шарм-эль-Шейх
  {
    id: '7',
    title: 'Египет, Шарм-эль-Шейх',
    destination: 'Шарм-эль-Шейх',
    country: 'Египет',
    duration: 7,
    price: 75000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Элитный курорт на берегу Красного моря',
    fullDescription: 'Шарм-эль-Шейх - один из самых престижных курортов Египта. Кристально чистое море, отличные условия для дайвинга, роскошные отели и развитая инфраструктура.',
    rating: 4.7,
    reviewsCount: 245,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Luxury Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 21,
    priceCalendar: generatePriceCalendar(75000)
  },
  // ЕГИПЕТ - Марса-Алам
  {
    id: '8',
    title: 'Египет, Марса-Алам',
    destination: 'Марса-Алам',
    country: 'Египет',
    duration: 7,
    price: 70000,
    originalPrice: 88000,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Новый курорт для любителей дайвинга',
    fullDescription: 'Марса-Алам - молодой курорт с нетронутой природой. Идеальное место для дайвинга и снорклинга. Кристально чистое море и коралловые рифы.',
    rating: 4.6,
    reviewsCount: 167,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Dive Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 20,
    priceCalendar: generatePriceCalendar(70000)
  },
  // ОАЭ - Дубай
  {
    id: '9',
    title: 'ОАЭ, Дубай',
    destination: 'Дубай',
    country: 'ОАЭ',
    duration: 5,
    price: 125000,
    originalPrice: 145000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Современный мегаполис с невероятной архитектурой',
    fullDescription: 'Дубай - город будущего, где роскошь встречается с инновациями. Посетите Бурдж-Халифа, покатайтесь на верблюдах в пустыне, совершите шоппинг в крупнейших торговых центрах мира. Окунитесь в атмосферу восточной сказки и современного комфорта.',
    rating: 4.8,
    reviewsCount: 267,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Burj Al Arab 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Завтраки',
      'Обзорная экскурсия',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'city',
    featured: true,
    discount: 14,
    priceCalendar: generatePriceCalendar(125000)
  },
  // ОАЭ - Абу-Даби
  {
    id: '10',
    title: 'ОАЭ, Абу-Даби',
    destination: 'Абу-Даби',
    country: 'ОАЭ',
    duration: 5,
    price: 115000,
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Столица ОАЭ с богатой культурой и современной архитектурой',
    fullDescription: 'Абу-Даби - столица ОАЭ, где традиции встречаются с современностью. Посетите мечеть шейха Зайда, парк Феррари, насладитесь роскошными пляжами и шоппингом.',
    rating: 4.7,
    reviewsCount: 198,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Grand Hotel 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'city',
    featured: false,
    discount: 15,
    priceCalendar: generatePriceCalendar(115000)
  },
  // ТАИЛАНД - Пхукет
  {
    id: '11',
    title: 'Таиланд, Пхукет',
    destination: 'Пхукет',
    country: 'Таиланд',
    duration: 10,
    price: 145000,
    originalPrice: 175000,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Тропический рай с белоснежными пляжами',
    fullDescription: 'Пхукет - жемчужина Таиланда. Тропические пляжи, кристально чистая вода, экзотическая кухня, богатая ночная жизнь и множество развлечений. Идеальное место для незабываемого отдыха.',
    rating: 4.9,
    reviewsCount: 423,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Resort 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 17,
    priceCalendar: generatePriceCalendar(145000)
  },
  // ТАИЛАНД - Паттайя
  {
    id: '12',
    title: 'Таиланд, Паттайя',
    destination: 'Паттайя',
    country: 'Таиланд',
    duration: 8,
    price: 95000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Активный курорт с развитой инфраструктурой',
    fullDescription: 'Паттайя - популярный курорт Таиланда с множеством развлечений, ресторанов, магазинов и ночных клубов. Отличное место для активного отдыха.',
    rating: 4.6,
    reviewsCount: 289,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'City Resort 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 21,
    priceCalendar: generatePriceCalendar(95000)
  },
  // ТАИЛАНД - Самуи
  {
    id: '13',
    title: 'Таиланд, Самуи',
    destination: 'Самуи',
    country: 'Таиланд',
    duration: 10,
    price: 135000,
    originalPrice: 165000,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Тропический остров с нетронутой природой',
    fullDescription: 'Самуи - райский остров с пляжами из белого песка, кокосовыми пальмами и кристально чистой водой. Идеальное место для романтического отдыха.',
    rating: 4.8,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Resort 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 18,
    priceCalendar: generatePriceCalendar(135000)
  },
  // ГРЕЦИЯ - Крит
  {
    id: '14',
    title: 'Греция, Крит',
    destination: 'Крит',
    country: 'Греция',
    duration: 7,
    price: 98000,
    originalPrice: 115000,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600612253971-422e7f7f4a7e?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Остров с богатой историей и прекрасными пляжами',
    fullDescription: 'Крит - самый большой остров Греции. Здесь вас ждут древние достопримечательности, прекрасные пляжи, вкусная кухня и гостеприимные жители.',
    rating: 4.8,
    reviewsCount: 312,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 15,
    priceCalendar: generatePriceCalendar(98000)
  },
  // ГРЕЦИЯ - Родос
  {
    id: '15',
    title: 'Греция, Родос',
    destination: 'Родос',
    country: 'Греция',
    duration: 7,
    price: 92000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1600612253971-422e7f7f4a7e?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1600612253971-422e7f7f4a7e?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Остров рыцарей с средневековыми замками',
    fullDescription: 'Родос - остров с богатой историей, прекрасными пляжами и средневековым Старым городом. Идеальное сочетание истории и пляжного отдыха.',
    rating: 4.7,
    reviewsCount: 267,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Coast Resort 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 16,
    priceCalendar: generatePriceCalendar(92000)
  },
  // ГРЕЦИЯ - Санторини
  {
    id: '16',
    title: 'Греция, Санторини',
    destination: 'Санторини',
    country: 'Греция',
    duration: 7,
    price: 155000,
    originalPrice: 185000,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600612253971-422e7f7f4a7e?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Романтический остров с закатами мирового уровня',
    fullDescription: 'Санторини - самый романтичный остров Греции. Белоснежные домики, синие купола церквей, невероятные закаты и изысканная кухня. Идеальное место для медового месяца.',
    rating: 4.9,
    reviewsCount: 456,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Luxury Hotel 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(155000)
  },
  // ИСПАНИЯ - Коста-Брава
  {
    id: '17',
    title: 'Испания, Коста-Брава',
    destination: 'Коста-Брава',
    country: 'Испания',
    duration: 7,
    price: 135000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Живописное побережье с прекрасными пляжами',
    fullDescription: 'Коста-Брава - одно из самых красивых побережий Испании. Скалистые бухты, чистое море, уютные курорты и отличная кухня.',
    rating: 4.8,
    reviewsCount: 189,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Seaside Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(135000)
  },
  // ИСПАНИЯ - Коста-дель-Соль
  {
    id: '18',
    title: 'Испания, Коста-дель-Соль',
    destination: 'Коста-дель-Соль',
    country: 'Испания',
    duration: 7,
    price: 78000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Солнечное побережье с золотыми пляжами',
    fullDescription: 'Коста-дель-Соль - одно из самых популярных побережий Испании. Прекрасные пляжи, развитая инфраструктура, множество развлечений и отличная кухня.',
    rating: 4.7,
    reviewsCount: 223,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Costa del Sol Family 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 18,
    priceCalendar: generatePriceCalendar(78000)
  },
  // ИТАЛИЯ - Римини
  {
    id: '19',
    title: 'Италия, Римини',
    destination: 'Римини',
    country: 'Италия',
    duration: 7,
    price: 125000,
    originalPrice: 150000,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Популярный курорт на Адриатическом море',
    fullDescription: 'Римини - один из самых популярных курортов Италии. Прекрасные пляжи, итальянская кухня, близость к историческим городам и множество развлечений.',
    rating: 4.7,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Beach Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 17,
    priceCalendar: generatePriceCalendar(125000)
  },
  // МАЛЬДИВЫ
  {
    id: '20',
    title: 'Мальдивы, Мале',
    destination: 'Мале',
    country: 'Мальдивы',
    duration: 10,
    price: 320000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Райский отдых на тропическом острове',
    fullDescription: 'Мальдивы - это воплощение мечты о райском отдыхе. Кристально чистая вода, белоснежные пляжи, роскошные виллы на воде. Идеальное место для романтического отдыха или медового месяца. В вашем распоряжении дайвинг, снорклинг, спа-процедуры и изысканная кухня.',
    rating: 5.0,
    reviewsCount: 98,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Water Villa Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в вилле на воде',
      'Питание "Все включено"',
      'Трансфер на гидросамолете',
      'Дайвинг и снорклинг',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(320000)
  },
  // ЭКСКУРСИИ
  {
    id: '21',
    title: 'Экскурсионный тур по Европе',
    destination: 'Париж, Рим, Венеция',
    country: 'Франция, Италия',
    duration: 10,
    price: 145000,
    originalPrice: 165000,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Увлекательное путешествие по самым красивым городам Европы',
    fullDescription: 'Посетите три жемчужины Европы за одно путешествие! Начните с романтичного Парижа, затем отправляйтесь в вечный Рим и завершите тур в сказочной Венеции. В программе: обзорные экскурсии, посещение музеев, свободное время для самостоятельных прогулок.',
    rating: 4.9,
    reviewsCount: 189,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Отели 4* в центре городов',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Авиаперелет + автобус',
    included: [
      'Перелет туда-обратно',
      'Проживание в отелях 4*',
      'Завтраки',
      'Обзорные экскурсии',
      'Трансферы',
      'Медицинская страховка'
    ],
    category: 'excursion',
    featured: true,
    discount: 12,
    priceCalendar: generatePriceCalendar(145000)
  },
  // ГОРНОЛЫЖНЫЕ
  {
    id: '22',
    title: 'Горнолыжный курорт в Альпах',
    destination: 'Церматт',
    country: 'Швейцария',
    duration: 7,
    price: 195000,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Лучшие склоны Альп для любителей горнолыжного спорта',
    fullDescription: 'Церматт - один из самых престижных горнолыжных курортов мира. Здесь вас ждут более 360 км трасс различной сложности, современные подъемники, уютные шале и рестораны с национальной кухней. Идеальное место для активного зимнего отдыха.',
    rating: 4.7,
    reviewsCount: 156,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Chalet Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в шале-отеле',
      'Завтраки',
      'Ски-пасс на 6 дней',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'ski',
    featured: false,
    priceCalendar: generatePriceCalendar(195000)
  },
  // КРУИЗЫ
  {
    id: '23',
    title: 'Круиз по Средиземному морю',
    destination: 'Барселона, Палермо, Миконос',
    country: 'Испания, Италия, Греция',
    duration: 8,
    price: 175000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73460?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Незабываемое морское путешествие на круизном лайнере',
    fullDescription: 'Отправьтесь в увлекательное круизное путешествие по Средиземному морю. Посетите солнечную Барселону, исторический Палермо и живописный Миконос. На борту лайнера вас ждут рестораны, развлечения, спа-центр и комфортабельные каюты.',
    rating: 4.6,
    reviewsCount: 142,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Каюта с окном',
    mealType: 'Все включено',
    transport: 'Авиаперелет + круиз',
    included: [
      'Перелет туда-обратно',
      'Круиз на лайнере',
      'Питание "Все включено"',
      'Экскурсии в портах',
      'Развлекательная программа',
      'Медицинская страховка'
    ],
    category: 'cruise',
    featured: false,
    priceCalendar: generatePriceCalendar(175000)
  },
  // АДВЕНЧУР
  {
    id: '24',
    title: 'Сафари в Кении',
    destination: 'Найроби, Масаи-Мара',
    country: 'Кения',
    duration: 8,
    price: 185000,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1525151531925-68fe6d2e5db1?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Уникальное приключение в дикой природе Африки',
    fullDescription: 'Отправьтесь в незабываемое сафари по национальным паркам Кении. Увидите Большую пятерку, стада антилоп, стаи фламинго и многое другое. Проживание в комфортабельных лоджах, профессиональные гиды и незабываемые впечатления гарантированы.',
    rating: 4.9,
    reviewsCount: 124,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Safari Lodge 4*',
    hotelRating: 4,
    mealType: 'Полный пансион',
    transport: 'Авиаперелет',
    included: [
      'Перелет туда-обратно',
      'Проживание в лоджах',
      'Питание полный пансион',
      'Сафари-туры',
      'Трансферы',
      'Медицинская страховка'
    ],
    category: 'adventure',
    featured: false,
    priceCalendar: generatePriceCalendar(185000)
  }
]

// Функция для получения горящих туров (скидка > 20%)
export const getHotTours = (): Tour[] => {
  return tours.filter(tour => (tour.discount && tour.discount > 20) || tour.price < 70000)
}

// Функция для получения туров по стране
export const getToursByCountry = (country: string): Tour[] => {
  return tours.filter(tour => tour.country === country)
}

// Функция для получения туров по категории
export const getToursByCategory = (category: Tour['category']): Tour[] => {
  return tours.filter(tour => tour.category === category)
}
