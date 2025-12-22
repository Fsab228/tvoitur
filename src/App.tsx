import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import About from './pages/About'
import Contacts from './pages/Contacts'
import HotTours from './pages/HotTours'
import Promotions from './pages/Promotions'
import Vacancies from './pages/Vacancies'
import News from './pages/News'
import HowToBook from './pages/HowToBook'
import Payment from './pages/Payment'
import Documents from './pages/Documents'
import VisaSupport from './pages/VisaSupport'

function App() {
  // Определяем базовый путь для GitHub Pages
  const basename = import.meta.env.BASE_URL || '/'
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/hot-tours" element={<HotTours />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/news" element={<News />} />
            <Route path="/how-to-book" element={<HowToBook />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/visa-support" element={<VisaSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

