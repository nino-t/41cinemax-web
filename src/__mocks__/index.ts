import db from './db'
import { generateFakeSchedule } from './movie-mock-utils'

/**
 * Delay 3 detik
 * @returns
 */
const delay = () => new Promise((resolve) => setTimeout(() => resolve, 3000))

/**
 * Mock service yang digunakan untuk login
 * @param email - email user
 * @param password - password user
 * @returns
 */
export const postMockLogin = async (email: string, password: string) => {
  await delay()
  const findUser = db.findOne('users', { email, password })

  if (findUser) {
    return {
      message: 'Login berhasil!',
      data: {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email
      }
    }
  }

  return Promise.reject({
    message: 'Login gagal, akun tidak ditemukan!',
    data: null
  })
}

/**
 * Mock service yang digunakan untuk registrasi
 * @param bodyRequest - data registrasi
 * @returns
 */
export const postMockRegister = async (bodyRequest: {
  name: string
  email: string
  phone: string
  password: string
}) => {
  await delay()
  const { name, email } = bodyRequest

  const users = db.getAll('users')
  const findUser = users.find((user) => user.email === email)

  if (findUser) {
    return Promise.reject({
      message: 'Email sudah terdaftar!',
      data: null
    })
  }

  const id = users.length + 1
  db.push('users', { id, ...bodyRequest })
  return {
    message: 'Registrasi berhasil!',
    data: {
      id,
      name,
      email
    }
  }
}

/**
 * Mock service yang digunakan untuk mendapatkan data film promosi
 * @param params
 * @returns
 */
export const getMockPromotedMovies = async (params: { limit: number }) => {
  await delay()

  return {
    message: 'Data film promosi berhasil didapatkan!',
    data: db.find('movies', { is_promoted: true }).slice(0, params.limit)
  }
}

/**
 * Mock service yang digunakan untuk mendapatkan data film
 * @param params
 * @returns
 */
export const getMockMovies = async (params: { limit: number }) => {
  await delay()

  return {
    message: 'Data film berhasil didapatkan!',
    data: db.getAll('movies').slice(0, params.limit)
  }
}

/**
 * Mock service yang digunakan untuk mendapatkan detail film
 * @param id
 * @returns
 */
export const getMockMovieDetail = async (id: number) => {
  await delay()

  const movie = db.findOne('movies', { id })
  if (!movie) {
    return Promise.reject({
      message: 'Film tidak ditemukan!',
      data: null
    })
  }

  return {
    message: 'Data film berhasil didapatkan!',
    data: movie
  }
}

/**
 * Mock service yang digunakan untuk mendapatkan jadwal film
 * @param id - id film
 * @param params - parameter tanggal
 * @returns
 */
export const getMovieSchedule = async (
  id: number,
  params: { start: string; end: string }
) => {
  await delay()
  const getMovieSchedules = () => {
    return db.find('schedules', { movie_id: id }).filter((schedule) => {
      const date = new Date(schedule.date)
      return date >= new Date(params.start) && date <= new Date(params.end)
    })
  }

  const schedules = getMovieSchedules()
  if (!schedules.length) {
    const fakeSchedules = generateFakeSchedule(id)
    fakeSchedules.forEach((schedule) => db.push('schedules', schedule))
  }

  return {
    message: 'Data jadwal film berhasil didapatkan!',
    data: getMovieSchedules()
  }
}

/**
 * Mock service yang digunakan untuk mendapatkan kursi terpesan
 * @param scheduleId
 * @returns
 */
export const getMockScheduleBookedSeat = async (scheduleId: number) => {
  await delay()
  const transactions = db.find('transactions', { schedule_id: scheduleId })

  return {
    message: 'Data kursi terpesan berhasil didapatkan!',
    data: transactions.map((transaction) => transaction.seat_numbers).flat()
  }
}

/**
 * Mock service yang digunakan untuk memesan kursi
 * @param bodyRequest
 * @returns
 */
export const postMockBookSeat = async (bodyRequest: {
  movie_id: number
  user_id: number
  schedule_id: number
  seat_numbers: Array<string>
  total_price: number
}) => {
  await delay()
  const { movie_id, schedule_id, seat_numbers, total_price } = bodyRequest
  const id = db.getAll('transactions').length + 1

  const transactionCreated = await db.push('transactions', {
    id,
    user_id: 1,
    movie_id,
    schedule_id,
    seat_numbers,
    total_price,
    created_at: new Date().toISOString()
  })

  return {
    message: 'Berhasil memesan kursi!',
    data: transactionCreated
  }
}
