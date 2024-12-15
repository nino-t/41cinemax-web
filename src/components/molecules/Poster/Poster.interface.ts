export interface PosterProps {
  /**
   * Judul film yang ditampilkan saat hover atau sebagai alt text.
   * @type {string}
   * @required
   * @example
   * <Poster
   *   title="Spider-Man: Across the Spider-Verse"
   *   source="/spiderman.jpg"
   * />
   */
  title: string

  /**
   * URL gambar poster film.
   * Mendukung format gambar seperti JPG, PNG, atau WebP.
   * @type {string}
   * @required
   * @example
   * <Poster
   *   source="https://image.tmdb.org/t/p/w500/poster.jpg"
   * />
   */
  source: string

  /**
   * Function yang dipanggil saat poster diklik.
   * Biasanya digunakan untuk navigasi ke detail film.
   * @type {() => void}
   * @example
   * <Poster
   *   onClick={() => navigate(`/movie/${movieId}`)}
   * />
   */
  onClick?: () => void
}
