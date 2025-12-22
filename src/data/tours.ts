import { Tour } from '../types/tour'

// Генерируем календарь цен для тура
const generatePriceCalendar = (basePrice: number, days: number = 30): Tour['priceCalendar'] => {
  const calendar: Tour['priceCalendar'] = []
  const today = new Date()
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Вариация цены ±15%
    const variation = (Math.random() - 0.5) * 0.3
    const price = Math.round(basePrice * (1 + variation))
    const available = Math.random() > 0.15 // 85% доступности
    
    calendar.push({
      date: date.toISOString().split('T')[0],
      price,
      available
    })
  }
  
  return calendar
}

// Туры с реальной информацией и уникальными изображениями
export const tours: Tour[] = [
  // ТУРЦИЯ - Анталия
  {
    id: '1',
    title: 'Турция, Анталия - Lara Beach',
    destination: 'Анталия, Лара',
    country: 'Турция',
    duration: 7,
    price: 85000,
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Роскошный пляжный отель 5* на первой линии с широкой территорией и аквапарком',
    fullDescription: 'Отель расположен в районе Лара - элитном пригороде Анталии. Просторная зеленая территория 15 гектаров, собственный пляж с золотым песком, 4 бассейна (включая детский), аквапарк на территории. Номера с видом на море или сад. Главный ресторан на 600 человек, анимация для детей и взрослых, спа-центр, фитнес-зал. Идеально для семей с детьми.',
    rating: 4.8,
    reviewsCount: 423,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Grand Lara Beach Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Анталия-Москва',
      'Проживание в отеле 5*',
      'Питание "Все включено" (24/7)',
      'Трансфер аэропорт-отель-аэропорт',
      'Медицинская страховка',
      'Аквапарк и развлекательная программа'
    ],
    notIncluded: [
      'Виза (не требуется для граждан РФ до 60 дней)',
      'Дополнительные экскурсии',
      'СПА-процедуры',
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
    title: 'Турция, Кемер - Бельдиби',
    destination: 'Кемер, Бельдиби',
    country: 'Турция',
    duration: 7,
    price: 72000,
    originalPrice: 90000,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Семейный отель 4* у подножия гор с чистой бухтой и пляжем',
    fullDescription: 'Кемер - курорт, окруженный сосновыми лесами и горами. Отель расположен в бухте с галечным пляжем, море кристально чистое. Территория средняя, 2 бассейна (взрослый и детский с горками), детский клуб, мини-диско. Ресторан шведский стол, есть детское меню. Вечерняя анимация, дискотека. Хорошее соотношение цена-качество. Подходит парам и семьям с детьми.',
    rating: 4.6,
    reviewsCount: 287,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Kemer Beach Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Анталия-Москва',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка',
      'Развлекательная программа'
    ],
    category: 'beach',
    featured: true,
    discount: 20,
    priceCalendar: generatePriceCalendar(72000)
  },
  
  // ТУРЦИЯ - Сиде
  {
    id: '3',
    title: 'Турция, Сиде - Манавгат',
    destination: 'Сиде, Манавгат',
    country: 'Турция',
    duration: 7,
    price: 68000,
    originalPrice: 85000,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* рядом с античным амфитеатром Сиде, песчаный пляж',
    fullDescription: 'Сиде - исторический курорт, где можно совместить пляжный отдых с экскурсиями. Отель находится в 5 минутах от Старого города с римскими руинами и амфитеатром. Пляж широкий, песчаный, с мелким заходом - идеально для детей. Бассейн с видом на море, есть бассейн для детей. Ресторан предлагает турецкую и европейскую кухню. Вечерами можно прогуляться по старинным улочкам. Подходит семьям и любителям истории.',
    rating: 4.7,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Side Coast Hotel 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Анталия-Москва',
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
    title: 'Турция, Бодрум - Яликавак',
    destination: 'Бодрум, Яликавак',
    country: 'Турция',
    duration: 7,
    price: 125000,
    originalPrice: 145000,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Премиум-отель 5* в бухте для яхт с приватным пляжем и spa-центром',
    fullDescription: 'Бодрум - самый стильный курорт Турции на Эгейском море. Отель расположен в престижной бухте Яликавак, где стоят белоснежные яхты. Современный минималистичный дизайн, номера с панорамными видами, бассейн infinity с видом на море. Ресторан a la carte, спа-центр с турецкой баней, фитнес с тренером. Пляж каменистый, но есть понтон. Территория небольшая, тихая, без анимации. Для взрослых, кто ценит покой и сервис.',
    rating: 4.9,
    reviewsCount: 156,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Bodrum Luxury Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Бодрум-Москва',
      'Проживание в отеле 5*',
      'Питание "Все включено" премиум',
      'Трансфер',
      'Медицинская страховка',
      'Доступ в spa-центр'
    ],
    category: 'beach',
    featured: true,
    discount: 14,
    priceCalendar: generatePriceCalendar(125000)
  },
  
  // ТУРЦИЯ - Аланья
  {
    id: '5',
    title: 'Турция, Аланья - Инджекум',
    destination: 'Аланья, Инджекум',
    country: 'Турция',
    duration: 7,
    price: 65000,
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Бюджетный отель 3* с песчаным пляжем, подходит для молодежи',
    fullDescription: 'Аланья - самый доступный курорт Турции. Отель простой, но чистый, расположен на первой линии. Пляж широкий, песчаный, пологий заход - хорошо для детей. 2 бассейна, детская площадка. Ресторан шведский стол, алкоголь местный. Вечерняя анимация активная, дискотека до 23:00. Много молодежи, семей. Можно сэкономить на питании - рядом много недорогих кафе. Центр Аланьи с крепостью и базаром в 15 минутах на автобусе.',
    rating: 4.3,
    reviewsCount: 456,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Alanya Beach Hotel 3*',
    hotelRating: 3,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Газіпаша-Москва',
      'Проживание в отеле 3*',
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
    title: 'Египет, Хургада - Макади Бей',
    destination: 'Хургада, Макади Бей',
    country: 'Египет',
    duration: 7,
    price: 68000,
    originalPrice: 85000,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Семейный отель 4* с коралловым рифом для снорклинга и аквапарком',
    fullDescription: 'Макади Бей - тихая бухта в 25 км от Хургады. Отель построен вокруг лагуны с кораллами - можно снорклить прямо с пляжа, не выходя в море. Большая зеленая территория, аквапарк с горками, детский клуб, анимация. Главный ресторан + итальянский, есть детское меню. Пляж песчаный, пологий. Вечерние шоу, дискотека. Отличный выбор для семей с детьми и любителей дайвинга. В море за рифом можно поплавать, но лучше на лодке к островам.',
    rating: 4.7,
    reviewsCount: 534,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Makadi Bay Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Хургада-Москва',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка',
      'Аквапарк и анимация'
    ],
    category: 'beach',
    featured: true,
    discount: 20,
    priceCalendar: generatePriceCalendar(68000)
  },
  
  // ЕГИПЕТ - Шарм-эль-Шейх
  {
    id: '7',
    title: 'Египет, Шарм-эль-Шейх - Наама Бей',
    destination: 'Шарм-эль-Шейх, Наама Бей',
    country: 'Египет',
    duration: 7,
    price: 89000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Премиум-отель 5* в центре Наама Бей с подводной частью для дайвинга',
    fullDescription: 'Наама Бей - самое популярное место в Шарме. Отель стоит прямо на коралловом рифе - из номеров видно рыбок под водой. Современный дизайн, номера с балконами и джакузи, несколько бассейнов, включая infinity pool. Diving center на территории, можно взять курс PADI. Несколько ресторанов (основной + итальянский, азиатский), 5 баров. Спа-центр, фитнес. Пляж с понтоном для купания (из-за кораллов). Рядом променад с магазинами и ресторанами. Для дайверов и тех, кто хочет комфорт.',
    rating: 4.8,
    reviewsCount: 298,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Naama Bay Diving Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Шарм-эль-Шейх-Москва',
      'Проживание в отеле 5*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка',
      'Доступ в дайвинг-центр'
    ],
    category: 'beach',
    featured: true,
    discount: 19,
    priceCalendar: generatePriceCalendar(89000)
  },
  
  // ЕГИПЕТ - Марса-Алам
  {
    id: '8',
    title: 'Египет, Марса-Алам - Абу Дабаб',
    destination: 'Марса-Алам, Абу Дабаб',
    country: 'Египет',
    duration: 7,
    price: 75000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* на берегу Красного моря, лучшие места для дайвинга рядом',
    fullDescription: 'Марса-Алам - новый курорт южнее Хургады, знаменит нетронутыми кораллами и большим количеством морских черепах. Отель стоит на берегу лагуны Абу Дабаб, где черепахи приплывают кормиться. Большая территория, несколько бассейнов, детский клуб. Ресторан шведский стол + итальянский. Пляж песчаный, рядом кораллы для снорклинга. Diving center организует поездки к лучшим рифам (Elphinstone, Dolphin House). Тихий отдых, природа, много дайверов. Центр курорта с магазинами в 10 минутах.',
    rating: 4.6,
    reviewsCount: 189,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Marsa Alam Beach Resort 4*',
    hotelRating: 4,
    mealType: 'Все включено',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Марса-Алам-Москва',
      'Проживание в отеле 4*',
      'Питание "Все включено"',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 21,
    priceCalendar: generatePriceCalendar(75000)
  },
  
  // ОАЭ - Дубай
  {
    id: '9',
    title: 'ОАЭ, Дубай - JBR Beach',
    destination: 'Дубай, Джумейра Бич',
    country: 'ОАЭ',
    duration: 5,
    price: 145000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 5* на пляже JBR с видом на небоскребы и парк развлечений',
    fullDescription: 'JBR (Jumeirah Beach Residence) - район на берегу Персидского залива с шикарными небоскребами. Отель современный, стильный, номера с панорамными окнами и балконами, вид на море или небоскребы. Пляж частный, песчаный, шезлонги и зонтики. Несколько ресторанов (включая итальянский и азиатский), лаундж-бар. Спа-центр, фитнес, rooftop бассейн. Рядом променад The Walk с магазинами и ресторанами, аквариум Dubai Aquarium в 15 минутах. Подходит для городского отдыха + пляж, шоппинг, развлечения.',
    rating: 4.8,
    reviewsCount: 387,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Dubai Marina Hotel 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Дубай-Москва',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка',
      'Доступ на пляж'
    ],
    category: 'city',
    featured: true,
    discount: 15,
    priceCalendar: generatePriceCalendar(145000)
  },
  
  // ОАЭ - Абу-Даби
  {
    id: '10',
    title: 'ОАЭ, Абу-Даби - Яс Айленд',
    destination: 'Абу-Даби, Яс Айленд',
    country: 'ОАЭ',
    duration: 5,
    price: 135000,
    originalPrice: 155000,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Роскошный отель 5* на острове Яс рядом с Ferrari World и водным парком',
    fullDescription: 'Яс Айленд - развлекательный остров в Абу-Даби. Отель современный, дизайнерский, огромные номера с мраморными ванными. Пляж песчаный, несколько бассейнов, включая infinity pool. Несколько ресторанов мирового уровня, лаундж-бары. Спа-центр с турецкой баней, фитнес. Рядом Ferrari World, Yas Waterworld, Formula 1 трасса. До мечети шейха Зайда и Лувра 20 минут на такси. Идеально для семей с детьми и любителей развлечений.',
    rating: 4.7,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Yas Island Resort 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Абу-Даби-Москва',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'city',
    featured: false,
    discount: 13,
    priceCalendar: generatePriceCalendar(135000)
  },
  
  // ТАИЛАНД - Пхукет
  {
    id: '11',
    title: 'Таиланд, Пхукет - Патонг',
    destination: 'Пхукет, Патонг',
    country: 'Таиланд',
    duration: 10,
    price: 165000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 5* на самом популярном пляже Пхукета с тропическим садом',
    fullDescription: 'Патонг - центр ночной жизни Пхукета. Отель стоит на склоне холма, спускается к пляжу через тропический сад. Номера в тайском стиле с балконами, вид на море или сад. Несколько бассейнов, включая infinity pool с видом на залив. Рестораны: тайский, итальянский, морепродукты. Спа-центр с традиционным тайским массажем. Пляж в 3 минутах (через сад), песчаный, но многолюдный. Рядом Bangla Road с барами и клубами. Для тех, кто хочет совместить пляж и активную ночную жизнь.',
    rating: 4.9,
    reviewsCount: 567,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Phuket Beach Resort 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Пхукет-Москва',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка',
      'Доступ в спа-центр'
    ],
    category: 'beach',
    featured: true,
    discount: 15,
    priceCalendar: generatePriceCalendar(165000)
  },
  
  // ТАИЛАНД - Паттайя
  {
    id: '12',
    title: 'Таиланд, Паттайя - Джомтьен',
    destination: 'Паттайя, Джомтьен',
    country: 'Таиланд',
    duration: 8,
    price: 105000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* в тихом районе Джомтьен, чище чем центр Паттайи',
    fullDescription: 'Джомтьен - спокойный район южнее центра Паттайи. Отель современный, территория компактная, бассейн с видом на море. Ресторан тайская и европейская кухня. Пляж через дорогу (2 минуты), песчаный, чище чем в центре. До Walking Street (центр ночной жизни) 10 минут на тук-туке. Много недорогих кафе рядом, 7-Eleven на каждом углу. Подходит для бюджетного отдыха, кто хочет пляж + дешевую еду и развлечения. Можно съездить на экскурсии (острова, сады Нонг Нуч).',
    rating: 4.5,
    reviewsCount: 412,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Jomtien Beach Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Бангкок-Москва',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер Бангкок-Паттайя-Бангкок',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 19,
    priceCalendar: generatePriceCalendar(105000)
  },
  
  // ТАИЛАНД - Самуи
  {
    id: '13',
    title: 'Таиланд, Самуи - Чавенг',
    destination: 'Самуи, Чавенг',
    country: 'Таиланд',
    duration: 10,
    price: 155000,
    originalPrice: 185000,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Бутик-отель 5* на белоснежном пляже с кокосовыми пальмами',
    fullDescription: 'Чавенг - самый популярный пляж Самуи, белый песок, пальмы, бирюзовая вода. Отель небольшой, бутиковый, номера-виллы с частными бассейнами или прямым выходом на пляж. Ресторан на пляже с морепродуктами и тайской кухней. Спа с массажем на берегу моря. Тихий отдых, романтика. Вечерами можно прогуляться по пляжу или поехать в центр Чавенга (10 минут) с барами и ресторанами. Идеально для пар, медового месяца. Можно арендовать байк и объехать остров (водопады, Большого Будду).',
    rating: 4.8,
    reviewsCount: 278,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Chaweng Beach Villa 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Самуи-Москва',
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
  
  // ГРЕЦИЯ - Крит
  {
    id: '14',
    title: 'Греция, Крит - Херсониссос',
    destination: 'Крит, Херсониссос',
    country: 'Греция',
    duration: 7,
    price: 105000,
    originalPrice: 125000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* на пляже с кристально чистой водой, рядом древний Кносский дворец',
    fullDescription: 'Херсониссос - самый популярный курорт Крита. Отель в греческом стиле, белые стены, синие акценты. Территория с оливковыми деревьями, бассейн, детский бассейн. Ресторан греческая кухня + международная, таверна на пляже. Пляж галечный, но вода кристально чистая. Рядом старый город с тавернами и магазинами. Можно съездить в Кносский дворец (15 минут), на экскурсии по острову. Хорошее сочетание пляжа, истории и развлечений.',
    rating: 4.7,
    reviewsCount: 345,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Cretan Beach Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Ираклион-Москва',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(105000)
  },
  
  // ГРЕЦИЯ - Родос
  {
    id: '15',
    title: 'Греция, Родос - Линдос',
    destination: 'Родос, Линдос',
    country: 'Греция',
    duration: 7,
    price: 98000,
    originalPrice: 115000,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* в исторической деревне Линдос с белокаменными домами и акрополем',
    fullDescription: 'Линдос - самая красивая деревня Родоса с белокаменными домиками и акрополем на холме. Отель стоит на холме с видом на залив и акрополь. Небольшая территория, бассейн с видом на море. Ресторан греческая кухня. Пляж в 5 минутах спуском, песчаный с мелким заходом. Можно подняться к акрополю пешком (10 минут), посетить старый город. Тихий, романтичный отдых. До столицы Родоса с рыцарским замком 1 час на автобусе. Подходит парам и любителям истории.',
    rating: 4.8,
    reviewsCount: 267,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Lindos View Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Родос-Москва',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 15,
    priceCalendar: generatePriceCalendar(98000)
  },
  
  // ГРЕЦИЯ - Санторини
  {
    id: '16',
    title: 'Греция, Санторини - Ия',
    destination: 'Санторини, Ия',
    country: 'Греция',
    duration: 7,
    price: 185000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Бутик-отель 5* в пещерных домах с видом на кальдеру и закат',
    fullDescription: 'Ия - самая красивая деревня Санторини, известна закатами. Отель - перестроенные традиционные пещерные дома на краю обрыва. Номера с террасами и джакузи, вид на кальдеру. Бассейн infinity на террасе. Ресторан средиземноморская кухня, вино из местных виноградников. Каждый вечер - лучший закат в мире, наблюдать с террасы отеля или пройти 5 минут к знаменитой смотровой. Тихий, романтичный отдых. Пляж внизу (подъем на фуникулере или осликами), но это не главное - главное виды и атмосфера.',
    rating: 4.9,
    reviewsCount: 189,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Oia Cave Hotel 5*',
    hotelRating: 5,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Санторини-Москва',
      'Проживание в отеле 5*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(185000)
  },
  
  // ИСПАНИЯ - Коста-Брава
  {
    id: '17',
    title: 'Испания, Коста-Брава - Льорет-де-Мар',
    destination: 'Коста-Брава, Льорет-де-Мар',
    country: 'Испания',
    duration: 7,
    price: 145000,
    originalPrice: 170000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* на скалистом побережье с бухтами и соснами',
    fullDescription: 'Коста-Брава - дикое, скалистое побережье Каталонии. Отель стоит на утесе с видом на бухты с соснами. Современный дизайн, номера с балконами и видом на море. Несколько бассейнов, включая infinity pool. Ресторан средиземноморская и каталонская кухня, морепродукты. Пляж внизу (5 минут спуском), галечный, но есть несколько бухт рядом для купания. Рядом городок Льорет с тапас-барами и магазинами. До Барселоны 1 час на автобусе. Для любителей природы и активного отдыха (походы, велосипед).',
    rating: 4.8,
    reviewsCount: 234,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Costa Brava Resort 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Барселона-Москва',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер Барселона-отель-Барселона',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: true,
    discount: 15,
    priceCalendar: generatePriceCalendar(145000)
  },
  
  // ИСПАНИЯ - Коста-дель-Соль
  {
    id: '18',
    title: 'Испания, Коста-дель-Соль - Торремолинос',
    destination: 'Коста-дель-Соль, Торремолинос',
    country: 'Испания',
    duration: 7,
    price: 85000,
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Семейный отель 3* на пляже с золотым песком, рядом центр с ресторанами',
    fullDescription: 'Торремолинос - самый популярный курорт Коста-дель-Соль. Отель простой, но чистый, стоит прямо на пляже. Территория небольшая, бассейн, детская площадка. Ресторан шведский стол, есть детское меню. Пляж широкий, песчаный, пологий заход. Рядом променад с ресторанами, тапас-барами, магазинами. Вечером можно прогуляться, послушать живую музыку. До Малаги с историческим центром 20 минут на поезде. Хороший бюджетный вариант для семей, много русскоговорящих туристов.',
    rating: 4.4,
    reviewsCount: 512,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Torremolinos Beach Hotel 3*',
    hotelRating: 3,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Малага-Москва',
      'Проживание в отеле 3*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 19,
    priceCalendar: generatePriceCalendar(85000)
  },
  
  // ИТАЛИЯ - Римини
  {
    id: '19',
    title: 'Италия, Римини - Марина Чентро',
    destination: 'Римини, Марина Чентро',
    country: 'Италия',
    duration: 7,
    price: 135000,
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ea8?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Отель 4* на Адриатическом побережье, рядом исторический центр',
    fullDescription: 'Римини - популярный итальянский курорт на Адриатике. Отель современный, стильный, в центре курортной зоны. Бассейн на крыше с видом на море, спа-центр. Ресторан итальянская кухня, паста, пицца, морепродукты. Пляж песчаный, широкий, с зонтиками и шезлонгами (платно). Рядом променад, центр с магазинами. До исторического центра Римини с аркой Августа 10 минут пешком. Можно съездить в Сан-Марино (30 минут), Равенну с мозаиками (1 час), Болонью (1.5 часа). Хорошее сочетание пляжа и культуры.',
    rating: 4.7,
    reviewsCount: 298,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Rimini Beach Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Прямой перелет',
    included: [
      'Перелет Москва-Римини-Москва',
      'Проживание в отеле 4*',
      'Завтраки',
      'Трансфер',
      'Медицинская страховка'
    ],
    category: 'beach',
    featured: false,
    discount: 16,
    priceCalendar: generatePriceCalendar(135000)
  },
  
  // МАЛЬДИВЫ
  {
    id: '20',
    title: 'Мальдивы, Атолл Ари - виллы на воде',
    destination: 'Мальдивы, Атолл Ари',
    country: 'Мальдивы',
    duration: 10,
    price: 380000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Резорт 5* на частном острове, виллы на воде с стеклянным полом',
    fullDescription: 'Мальдивы - рай на земле. Резорт на частном острове, все виллы на сваях над водой с прозрачным полом (видно рыбок). Виллы огромные, с панорамными окнами, террасой с лестницей в море, джакузи. Рестораны: основной + подводный ресторан + ресторан на пляже. Спа-центр на воде, дайвинг-центр PADI 5*. Остров небольшой, можно обойти за 20 минут. Пляж белоснежный, море бирюзовое. Трансфер на гидросамолете или скоростном катере. Полное уединение, романтика, природа. Для пар, медового месяца.',
    rating: 5.0,
    reviewsCount: 124,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Ari Atoll Water Villa Resort 5*',
    hotelRating: 5,
    mealType: 'Все включено',
    transport: 'Прямой перелет + гидросамолет',
    included: [
      'Перелет Москва-Мале-Москва',
      'Трансфер на гидросамолете',
      'Проживание в вилле на воде 5*',
      'Питание "Все включено" премиум',
      'Дайвинг и снорклинг',
      'Медицинская страховка',
      'Доступ в spa-центр'
    ],
    category: 'beach',
    featured: true,
    discount: 16,
    priceCalendar: generatePriceCalendar(380000)
  },
  
  // ЭКСКУРСИИ
  {
    id: '21',
    title: 'Экскурсионный тур: Париж → Рим → Венеция',
    destination: 'Париж, Рим, Венеция',
    country: 'Франция, Италия',
    duration: 10,
    price: 165000,
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Тур по трём столицам Европы с обзорными экскурсиями',
    fullDescription: 'Комбинированный тур по трём легендарным городам. Париж (3 ночи): обзорная экскурсия, Эйфелева башня, Лувр, Монмартр, свободное время для прогулок. Рим (3 ночи): Колизей, Ватикан, фонтан Треви, площадь Испании, паста и джелато. Венеция (2 ночи): площадь Сан-Марко, гондола, остров Мурано, прогулки по каналам. Отели 4* в центре каждого города, завтраки включены. Переезды на комфортабельном автобусе или поезде. Профессиональный русскоязычный гид. Свободное время в каждом городе.',
    rating: 4.9,
    reviewsCount: 267,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Отели 4* в центре городов',
    hotelRating: 4,
    mealType: 'Завтраки',
    transport: 'Авиаперелет + автобус/поезд',
    included: [
      'Перелет Москва-Париж, Венеция-Москва',
      'Проживание в отелях 4*',
      'Завтраки',
      'Обзорные экскурсии в каждом городе',
      'Трансферы между городами',
      'Русскоязычный гид',
      'Медицинская страховка'
    ],
    category: 'excursion',
    featured: true,
    discount: 13,
    priceCalendar: generatePriceCalendar(165000)
  },
  
  // ГОРНОЛЫЖНЫЕ
  {
    id: '22',
    title: 'Швейцария, Церматт - Маттерхорн',
    destination: 'Церматт',
    country: 'Швейцария',
    duration: 7,
    price: 225000,
    originalPrice: 260000,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Премиум горнолыжный курорт у подножия Маттерхорна',
    fullDescription: 'Церматт - один из самых престижных курортов Альп, находится у подножия знаменитой горы Маттерхорн. Курорт без автомобилей (только электромобили), старинная швейцарская атмосфера. Отель-шале 4* в традиционном стиле, с камином, сауной. Завтраки и ужины в ресторане отеля (швейцарская кухня - фондю, раклет). 360 км трасс всех уровней сложности, современные подъемники, ски-пасс на 6 дней включен. Можно покататься на санях, посетить spa, погулять по городу с шоколадными магазинами. Для опытных лыжников и ценителей альпийской атмосферы.',
    rating: 4.8,
    reviewsCount: 178,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Zermatt Chalet Hotel 4*',
    hotelRating: 4,
    mealType: 'Завтраки и ужины',
    transport: 'Прямой перелет + трансфер',
    included: [
      'Перелет Москва-Женева-Москва',
      'Трансфер Женева-Церматт-Женева',
      'Проживание в шале-отеле 4*',
      'Завтраки и ужины',
      'Ски-пасс на 6 дней',
      'Медицинская страховка'
    ],
    category: 'ski',
    featured: false,
    discount: 13,
    priceCalendar: generatePriceCalendar(225000)
  },
  
  // КРУИЗЫ
  {
    id: '23',
    title: 'Круиз по Средиземному морю',
    destination: 'Барселона → Палермо → Миконос → Родос',
    country: 'Испания, Италия, Греция',
    duration: 8,
    price: 195000,
    originalPrice: 225000,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1540541338287-003002d6b3d0?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Круиз на лайнере 4* по 4 портам Средиземного моря',
    fullDescription: 'Круиз на современном лайнере по самым красивым портам Средиземноморья. Барселона: посадка, обзорная экскурсия (Саграда Фамилия, парк Гуэль), ночь на борту. Палермо (Сицилия): экскурсия по историческому центру, кафедральный собор, местная кухня. Миконос: белые домики, ветряные мельницы, пляжи с бирюзовой водой. Родос: рыцарский замок, старый город, пляжи. На борту: рестораны (шведский стол + a la carte), бары, бассейны, театр, дискотека, спа-центр. Каюта с окном, питание все включено на борту. Русскоязычный персонал.',
    rating: 4.7,
    reviewsCount: 198,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Каюта с окном на лайнере 4*',
    mealType: 'Все включено',
    transport: 'Авиаперелет + круиз',
    included: [
      'Перелет Москва-Барселона, Афины-Москва',
      'Круиз на лайнере 4*',
      'Питание "Все включено" на борту',
      'Обзорные экскурсии в портах',
      'Развлекательная программа на борту',
      'Медицинская страховка'
    ],
    category: 'cruise',
    featured: false,
    discount: 13,
    priceCalendar: generatePriceCalendar(195000)
  },
  
  // АДВЕНЧУР
  {
    id: '24',
    title: 'Сафари в Кении - Большая Пятерка',
    destination: 'Найроби → Масаи-Мара → озеро Найваша',
    country: 'Кения',
    duration: 8,
    price: 215000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=85',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=85',
    ],
    description: 'Сафари-тур по национальным паркам Кении в поисках Большой Пятерки',
    fullDescription: 'Настоящее африканское приключение! Найроби (1 ночь): акклиматизация, посещение центра слонов. Масаи-Мара (4 ночи): заповедник, где живет Большая Пятерка (лев, слон, буйвол, носорог, леопард). Утренние и вечерние гейм-драйвы на открытых джипах с профессиональным гидом-масаем. Миграция антилоп гну (если сезон). Озеро Найваша (2 ночи): водные сафари на лодках, стаи фламинго, гиппопотамы. Проживание в лоджах 4* (комфортабельные палатки или бунгало), питание полный пансион. Профессиональный русскоязычный гид. Незабываемые впечатления гарантированы!',
    rating: 4.9,
    reviewsCount: 145,
    departure: 'Москва',
    departureCity: 'Москва',
    hotel: 'Safari Lodge 4*',
    hotelRating: 4,
    mealType: 'Полный пансион',
    transport: 'Авиаперелет',
    included: [
      'Перелет Москва-Найроби-Москва',
      'Проживание в лоджах 4*',
      'Питание полный пансион',
      'Сафари-туры в парках',
      'Трансферы между локациями',
      'Профессиональный русскоязычный гид',
      'Медицинская страховка'
    ],
    category: 'adventure',
    featured: false,
    discount: 14,
    priceCalendar: generatePriceCalendar(215000)
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
