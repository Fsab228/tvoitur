import { CreditCard, Building2, Wallet, CheckCircle } from 'lucide-react'

const Payment = () => {
  const methods = [
    {
      icon: CreditCard,
      title: 'Банковской картой',
      description: 'Оплата картами Visa, MasterCard, МИР через безопасный платежный шлюз. Мгновенное подтверждение оплаты.'
    },
    {
      icon: Building2,
      title: 'Банковский перевод',
      description: 'Перевод на расчетный счет компании. Реквизиты для оплаты отправляем после подтверждения бронирования.'
    },
    {
      icon: Wallet,
      title: 'Наличными',
      description: 'Возможна оплата наличными при личной встрече (по договоренности) или курьеру. Подходит для Москвы и области.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Способы оплаты</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Удобные и безопасные способы оплаты туров
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-primary-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Условия оплаты</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Предоплата:</strong> 30-50% от стоимости тура вносится при бронировании для закрепления мест в отеле и авиабилетов
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Окончательная оплата:</strong> Остальная сумма оплачивается за 7-14 дней до вылета. Точные даты уточняются индивидуально
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Возврат средств:</strong> В случае отмены поездки возврат осуществляется согласно условиям договора и политике отеля/авиакомпании
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Безопасность:</strong> Все платежи проходят через защищенные каналы связи. Мы не храним данные ваших банковских карт
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-800">Важно!</h3>
          <p className="text-yellow-700">
            Цены на сайте указаны ориентировочно и могут меняться в зависимости от дат вылета, загрузки отеля и других факторов. 
            Точную стоимость тура мы сообщим после подтверждения наличия мест и конкретных дат поездки.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Вопросы по оплате?</h2>
          <p className="text-gray-700 mb-6">
            Наши менеджеры подробно расскажут о всех способах оплаты и помогут выбрать самый удобный для вас
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

export default Payment
