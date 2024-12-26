import { CardProps } from '../../molecules/Card/Card.interface'

export interface MovieCardProps
  extends Required<Pick<CardProps, 'title' | 'thumbnail'>> {
  /**
   * Tanggal rilis film.
   * @type {string}
   * @required
   * @example
   * <MovieCard
   *   releaseDate="2021-08-20"
   *   {...otherProps}
   * />
   */
  releaseDate: string

  /**
   * Daftar genre film.
   * @type {string[]}
   * @required
   * @example
   * <MovieCard
   *   genres={['Action', 'Adventure', 'Sci-Fi']}
   *   {...otherProps}
   * />
   */
  genres: string[]

  /**
   * Rating film dalam skala angka.
   * @type {number}
   * @required
   * @example
   * <MovieCard
   *   rating={4.5}
   *   {...otherProps}
   * />
   */
  rating: number

  /**
   * Function yang dipanggil ketika tombol "Get Tickets" diklik.
   * @type {() => void}
   * @required
   * @example
   * <MovieCard
   *   onGetTickets={() => {
   *     router.push(`/movies/${movieId}/tickets`)
   *   }}
   *   {...otherProps}
   * />
   */
  onGetTickets: () => void

  /**
   * Function yang dipanggil ketika tombol "See Details" diklik.
   * @type {() => void}
   * @required
   * @example
   * <MovieCard
   *   onSeeDetails={() => {
   *     router.push(`/movies/${movieId}`)
   *   }}
   *   {...otherProps}
   * />
   */
  onSeeDetails: () => void
}
