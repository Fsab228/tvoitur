import { MessageCircle, CheckCircle, CreditCard, FileText } from 'lucide-react'

const HowToBook = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: '1. Свяжитесь с нами',
      description: 'Напишите в Telegram (@marytourism) или WhatsApp (+66903316008). Опишите, куда хотите поехать, когда и сколько человек.'
    },
    {
      icon: CheckCircle,
      title: '2. Подбор тура',
      description: 'Наш менеджер подберет для вас несколько вариантов туров, которые соответствуют вашим пожеланиям и бюджету. Ответим на все вопросы.'
    },
    {
      icon: CreditCard,
      title: '3. Бронирование и оплата',
      description: 'Выбираете подходящий вариант. Мы отправляем договор и счет. Оплата возможна банковской картой, переводом или наличными (по договоренности).'
    },
    {
      icon: FileText,
      title: '4. Подготовка документов',
      description: 'Мы помогаем собрать все необходимые документы, оформляем визу (если требуется), бронируем отель и билеты. Вы получаете все документы.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Как забронировать тур</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Простой процесс бронирования в несколько шагов
        </p>

        <div className="space-y-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-primary-600">{step.title}</h3>
                    <p className="text-gray-700 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-primary-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Важная информация</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Бронирование возможно за 2-3 месяца до поездки и даже за несколько дней (горящие туры)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Для бронирования нужны данные паспортов всех туристов (ФИО, дата рождения, серия и номер паспорта)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Предоплата обычно составляет 30-50% от стоимости тура</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Остальная сумма оплачивается за 7-14 дней до вылета</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Мы поддерживаем вас на всех этапах - от бронирования до возвращения домой</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы забронировать тур?</h2>
          <p className="text-gray-700 mb-6">
            Свяжитесь с нами прямо сейчас - ответим на все вопросы и поможем выбрать идеальный тур!
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

export default HowToBook
