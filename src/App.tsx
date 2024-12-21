import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '@/pages/login'
import { RegisterPage } from '@/pages/register'
import { HomePage } from '@/pages/home'
import { MovieDetailPage } from '@/pages/movie-detail'
import { BookingPage } from '@/pages/booking'
import AuthLayout from '@/components/templates/AuthLayout'
import useSnakebarState from '@/hooks/useSnakebarState'
import Snackbar from '@/components/molecules/Snackbar'

function App() {
  // Hook untuk mengelola state Snackbar
  const {
    open: snakebarOpened,
    message,
    severity,
    closeSnakebar
  } = useSnakebarState()

  return (
    <>
      <Routes>
        {/* Auth Routes dengan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Main Routes dengan MainLayout */}
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/booking/:movieId/:scheduleId" element={<BookingPage />} />
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
