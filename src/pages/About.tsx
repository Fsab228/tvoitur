import { Shield, Star, Users, Globe } from 'lucide-react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">О компании ТвойТур</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ТвойТур — это ведущее туристическое агентство, которое помогает тысячам людей 
            открывать для себя новые страны и получать незабываемые впечатления от путешествий.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Мы работаем на рынке туризма уже много лет и за это время заслужили доверие 
            наших клиентов. Наша команда профессионалов тщательно отбирает лучшие туры 
            от проверенных туроператоров, чтобы предложить вам только качественные и 
            безопасные варианты отдыха.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Мы понимаем, что каждое путешествие уникально, поэтому предлагаем 
            индивидуальный подход к каждому клиенту. Наши менеджеры всегда готовы 
            помочь вам выбрать идеальный тур, который соответствует вашим желаниям и бюджету.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Наш опыт</h3>
            <p className="text-gray-600">
              Более 10 лет успешной работы на рынке туризма. Мы знаем все тонкости 
              организации идеального отдыха.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Наши клиенты</h3>
            <p className="text-gray-600">
              Более 50 000 довольных клиентов, которые вернулись к нам снова и 
              рекомендуют нас своим друзьям.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Направления</h3>
            <p className="text-gray-600">
              Мы предлагаем туры в более чем 50 стран мира — от пляжного отдыха 
              до экстремальных приключений.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Гарантии</h3>
            <p className="text-gray-600">
              Мы гарантируем безопасность вашего отдыха и полную поддержку на всех 
              этапах путешествия.
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
              href="https://t.me/tvoytur_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/79991234567"
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

