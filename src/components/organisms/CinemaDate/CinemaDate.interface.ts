export interface CinemaDateProps {
  /**
   * Tanggal yang dipilih untuk jadwal film.
   * Format tanggal menggunakan ISO string (YYYY-MM-DD).
   * @type {string}
   * @example
   * <CinemaDate value="2024-10-15" />
   */
  value?: string

  /**
   * Class CSS tambahan untuk kustomisasi tampilan.
   * Menggunakan Tailwind CSS.
   * @type {string}
   * @example
   * <CinemaDate className="w-full md:w-64" />
   */
  className?: string

  /**
   * Function yang dipanggil saat user memilih tanggal baru.
   * Menerima parameter tanggal dalam format ISO string.
   * @type {(date: string) => void}
   * @example
   * <CinemaDate onChange={(date) => setSelectedDate(date)} />
   */
  onChange: (date: string) => void
}
