import { Globe, CheckCircle, Clock, FileText } from 'lucide-react'

const VisaSupport = () => {
  const services = [
    {
      title: 'Консультация по визам',
      description: 'Расскажем, нужна ли виза для вашей поездки, какие документы потребуются и сколько времени займет оформление'
    },
    {
      title: 'Помощь в сборе документов',
      description: 'Поможем собрать все необходимые документы для визы: справки, выписки, фотографии, анкеты'
    },
    {
      title: 'Подача документов в консульство',
      description: 'Подадим документы в консульство или визовый центр от вашего имени, если вы не можете приехать лично'
    },
    {
      title: 'Получение визы',
      description: 'Отследим статус вашей визы и получим готовый паспорт, передадим вам удобным способом'
    }
  ]

  const visaFree = [
    { country: 'Турция', period: '60 дней' },
    { country: 'Египет', period: '30 дней' },
    { country: 'ОАЭ', period: '90 дней' },
    { country: 'Таиланд', period: '30 дней' },
  ]

  const visaRequired = [
    { country: 'Греция (Шенген)', period: '7-14 дней' },
    { country: 'Испания (Шенген)', period: '7-14 дней' },
    { country: 'Италия (Шенген)', period: '7-14 дней' },
    { country: 'Мальдивы', period: '3-5 дней' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Визовая поддержка</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Помогаем с оформлением виз для всех направлений
        </p>

        <div className="bg-primary-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
            <Globe className="w-8 h-8 text-primary-600" />
            <span>Наши услуги</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span>Безвизовые страны</span>
            </h2>
            <ul className="space-y-3">
              {visaFree.map((item, index) => (
                <li key={index} className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{item.country}</span>
                  <span className="text-gray-500 text-sm">{item.period}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">* Для граждан РФ по загранпаспорту</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <span>Требуется виза</span>
            </h2>
            <ul className="space-y-3">
              {visaRequired.map((item, index) => (
                <li key={index} className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{item.country}</span>
                  <span className="text-gray-500 text-sm">Оформление: {item.period}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">* Сроки могут меняться в зависимости от сезона</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-3">
            <FileText className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Важно знать!</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Оформление визы обычно занимает от 5 до 14 рабочих дней</li>
                <li>• Рекомендуем начать оформление визы за 1-2 месяца до поездки</li>
                <li>• Для Шенгенской визы может потребоваться личное присутствие при подаче документов</li>
                <li>• Некоторые страны выдают визу по прилету (уточняйте при бронировании)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна помощь с визой?</h2>
          <p className="text-gray-700 mb-6">
            Расскажем, нужна ли виза для вашей поездки, и поможем с её оформлением. Консультация бесплатная!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/marytourism"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/66903316008"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaSupport
