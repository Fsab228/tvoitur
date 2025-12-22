import { Shield, Star, Users, Globe } from 'lucide-react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">О компании ТвойТур</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ТвойТур — это туристическое агентство с индивидуальным подходом к каждому клиенту. 
            Мы не показываем сотни вариантов — отбираем только те туры, которые проверили и можем 
            подробно объяснить.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Наша команда работает напрямую с отелями и авиакомпаниями, что позволяет предлагать 
            выгодные цены без посредников. Мы формируем турпакеты индивидуально под ваши даты 
            и предпочтения, не ограничиваясь стандартными предложениями крупных операторов.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Мы честно рассказываем о каждом отеле: что это за место, как там устроено, 
            как проходит отдых, кому подойдет, а кому нет. Наша цель — чтобы вы выбрали именно то, 
            что вам действительно подходит, а не то, что просто есть в базе.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Бронирование происходит через Telegram и WhatsApp — быстро, удобно, без звонков 
            в call-центры. Мы поддерживаем вас на всех этапах — от подбора тура до возвращения домой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Наш подход</h3>
            <p className="text-gray-600">
              Работаем напрямую с отелями и перевозчиками. Не показываем всё подряд — 
              отбираем проверенные варианты с личным подходом к каждому клиенту.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Прямое общение</h3>
            <p className="text-gray-600">
              Работаем командой, без колл-центров. Каждый клиент общается напрямую 
              с менеджером, который ведет его от подбора до возвращения.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Проверенные отели</h3>
            <p className="text-gray-600">
              По каждому отелю рассказываем детально: что это за место, как устроено, 
              как проходит отдых, кому подойдет, а кому нет. Честно и подробно.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Поддержка</h3>
            <p className="text-gray-600">
              Сопровождаем на всех этапах: от выбора тура до вылета и во время отдыха. 
              Всегда на связи, решаем вопросы оперативно.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы отправиться в путешествие?</h2>
          <p className="text-gray-700 mb-6">
            Свяжитесь с нашими менеджерами в Telegram или WhatsApp для консультации
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

export default About

