import { FileText, CheckCircle, AlertCircle } from 'lucide-react'

const Documents = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Необходимые документы</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Список документов, которые понадобятся для бронирования и поездки
        </p>

        <div className="bg-primary-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
            <FileText className="w-8 h-8 text-primary-600" />
            <span>Для бронирования тура</span>
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Данные паспортов:</strong> ФИО (как в паспорте), дата рождения, серия и номер паспорта, срок действия паспорта, место выдачи
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Контактные данные:</strong> Телефон и email для связи во время поездки
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Особые пожелания:</strong> Если нужны специальные условия (детская кроватка, диетическое питание и т.д.)
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
            <FileText className="w-8 h-8 text-primary-600" />
            <span>Документы для поездки</span>
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Загранпаспорт:</strong> Действительный минимум 3 месяца с момента возвращения из поездки (для большинства стран)
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Виза (если требуется):</strong> Мы помогаем с оформлением виз для всех направлений
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Медицинская страховка:</strong> Включена в стоимость тура, полис отправляем вместе с документами
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Ваучер отеля:</strong> Отправляем за 3-5 дней до вылета на email
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Авиабилеты:</strong> Электронные билеты (e-tickets) отправляем на email после оплаты
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <strong>Для детей:</strong> Свидетельство о рождении, согласие на выезд от второго родителя (если едет только один родитель)
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Важно проверить перед вылетом!</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Срок действия загранпаспорта должен быть достаточным для поездки</li>
                <li>• ФИО в авиабилетах должны точно совпадать с данными в паспорте</li>
                <li>• Наличие всех необходимых документов (паспорт, виза, страховка, ваучер)</li>
                <li>• Рекомендуем распечатать все документы и взять с собой электронные копии</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна помощь с документами?</h2>
          <p className="text-gray-700 mb-6">
            Наши менеджеры подробно расскажут, какие документы нужны для вашей поездки, и помогут с их оформлением
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

export default Documents
