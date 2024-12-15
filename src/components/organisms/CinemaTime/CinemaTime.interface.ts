export interface CinemaTimeProps {
  /**
   * Waktu tayang yang dipilih untuk film.
   * Menggunakan format 24 jam (HH:mm).
   * @type {string}
   * @example
   * <CinemaTime value="10:00" />
   */
  value?: string

  /**
   * Daftar waktu tayang yang tersedia.
   * Berisi label untuk tipe film (2D/3D/IMAX) dan waktu tayang.
   * @type {Array<{ label: string; value: string }>}
   * @example
   * <CinemaTime
   *   times={[
   *     { label: 'IMAX 3D', value: '10:00' },
   *     { label: '2D', value: '13:30' }
   *   ]}
   * />
   */
  times: Array<{ label: string; value: string }>

  /**
   * Class CSS tambahan untuk kustomisasi tampilan.
   * Menggunakan Tailwind CSS.
   * @type {string}
   * @example
   * <CinemaTime className="grid grid-cols-3 gap-4" />
   */
  className?: string

  /**
   * Function yang dipanggil saat user memilih waktu tayang baru.
   * Menerima parameter waktu dalam format HH:mm.
   * @type {(time: string) => void}
   * @example
   * <CinemaTime onChange={(time) => setSelectedTime(time)} />
   */
  onChange: (time: string) => void
}
