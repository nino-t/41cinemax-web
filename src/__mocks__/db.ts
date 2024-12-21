import { SimpleDB } from './simple-db'

type DBSchema = {
  users: Array<{
    id: number
    name: string
    email: string
    phone: string
    password: string
  }>
  movies: Array<{
    id: number
    title: string
    poster: {
      landscape: string
      portrait: string
    }
    trailer_url: string
    genres: Array<string>
    rating: number
    release_date: string
    synopsis: string
    director: string
    country: string
    duration: number
    is_promoted: boolean
  }>
  schedules: Array<{
    id: number
    movie_id: number
    date: string
    time: string
    price: number
  }>
  transactions: Array<{
    id: number
    user_id: number
    movie_id: number
    schedule_id: number
    seat_numbers: Array<string>
    total_price: number
    created_at: string
  }>
}

const db = await new SimpleDB<DBSchema>('./db.json').init()

export default db