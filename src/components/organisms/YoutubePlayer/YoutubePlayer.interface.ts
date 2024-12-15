export interface YoutubePlayerProps {
  /**
   * Judul video yang akan ditampilkan.
   * Digunakan sebagai label aksesibilitas dan teks alternatif.
   * @type {string}
   * @example
   * <YoutubePlayer title="Avatar 2: The Way of Water - Official Trailer" />
   */
  title: string

  /**
   * URL gambar thumbnail video.
   * Ditampilkan sebagai preview sebelum video diputar.
   * @type {string}
   * @example
   * <YoutubePlayer
   *   thumbnailURL="https://img.youtube.com/vi/d9MyW72ELq0/maxresdefault.jpg"
   * />
   */
  thumbnailURL: string

  /**
   * URL video YouTube yang akan diputar.
   * Mendukung format URL standar YouTube atau URL sharing.
   * @type {string}
   * @example
   * <YoutubePlayer
   *   videoURL="https://www.youtube.com/watch?v=d9MyW72ELq0"
   *   // atau
   *   videoURL="https://youtu.be/d9MyW72ELq0"
   * />
   */
  videoURL: string
}
