import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import HomePage from '@/pages/home'
import MovieDetailPage from '@/pages/movie-detail'
import BookingPage from '@/pages/booking'
import AuthLayout from '@/components/templates/AuthLayout'
import useSnakebarState from '@/hooks/useSnakebarState'
import Snackbar from '@/components/molecules/Snackbar'
import MainLayout from '@/components/templates/MainLayout'
import { useEffect } from 'react'
import { initDB } from './__mocks__/db'

function App() {
  // Hook untuk mengelola state Snackbar
  const {
    open: snakebarOpened,
    message,
    severity,
    closeSnakebar
  } = useSnakebarState()

  // Inisialisasi mock-data saat aplikasi pertama kali di-load
  useEffect(() => {
    initDB()
  }, [])

  return (
    <>
      <Routes>
        {/* Auth Routes dengan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Main Routes dengan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
          <Route path="/movie/:movieId/booking" element={<BookingPage />} />
        </Route>
      </Routes>

      {/* Global Snackbar untuk feedback */}
      <Snackbar
        show={snakebarOpened}
        message={message}
        type={severity}
        onClose={closeSnakebar}
      />
    </>
  )
}

export default App
