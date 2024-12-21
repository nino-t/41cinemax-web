import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { HomePage } from './pages/home'
import { MovieDetailPage } from './pages/movie-detail'
import { BookingPage } from './pages/booking'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/booking/:movieId/:scheduleId" element={<BookingPage />} />
    </Routes>
  )
}

export default App
