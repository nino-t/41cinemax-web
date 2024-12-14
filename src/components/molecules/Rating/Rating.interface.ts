export interface RatingProps {
  /**
   * Nilai rating yang akan ditampilkan.
   * Mendukung angka desimal untuk setengah bintang.
   * @type {number}
   * @required
   * @example
   * <Rating rating={4.5} />
   */
  rating: number

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan rating stars.
   * @type {string}
   * @example
   * <Rating
   *   rating={4}
   *   className="gap-1 text-yellow-400"
   * />
   */
  className?: string
}
