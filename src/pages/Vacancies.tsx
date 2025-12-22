import { Briefcase, MapPin, Clock } from 'lucide-react'

const Vacancies = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Менеджер по продажам туров',
      location: 'Удаленно',
      type: 'Полная занятость',
      description: 'Мы ищем активного менеджера по продажам туров с опытом работы в туризме от 1 года. Удаленная работа, гибкий график, возможность зарабатывать от 80 000 ₽ + процент от продаж.'
    },
    {
      id: 2,
      title: 'Контент-менеджер',
      location: 'Удаленно',
      type: 'Частичная занятость',
      description: 'Требуется специалист для наполнения сайта информацией о турах, создания описаний отелей и направлений. График свободный, оплата по договоренности.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Вакансии</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Присоединяйтесь к нашей команде! Мы всегда рады талантливым специалистам.
        </p>

        {vacancies.length > 0 ? (
          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">{vacancy.title}</h2>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{vacancy.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{vacancy.type}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{vacancy.description}</p>
                <a
                  href={`https://t.me/marytourism?text=Здравствуйте!%20Интересует%20вакансия:%20${encodeURIComponent(vacancy.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Откликнуться
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">Сейчас нет открытых вакансий</p>
            <p className="text-gray-500">Но мы всегда рады получить ваше резюме!</p>
          </div>
        )}

        <div className="mt-12 bg-primary-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Хотите работать с нами?</h2>
          <p className="text-gray-700 text-center mb-6">
            Отправьте свое резюме в Telegram или WhatsApp — мы обязательно с вами свяжемся!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/marytourism?text=Здравствуйте!%20Хочу%20отправить%20резюме%20в%20компанию%20ТвойТур"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/66903316008?text=Здравствуйте!%20Хочу%20отправить%20резюме%20в%20компанию%20ТвойТур"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vacancies
