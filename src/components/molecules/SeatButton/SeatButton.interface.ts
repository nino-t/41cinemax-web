export interface SeatPosition {
  /**
   * Kode baris tempat duduk.
   * @type {string}
   * @example 'A'
   */
  row: string

  /**
   * Nomor kolom tempat duduk.
   * @type {string}
   * @example '1'
   */
  column: string
}

export interface SeatStatus {
  /**
   * Status ketersediaan tempat duduk.
   * True jika masih tersedia untuk dipilih.
   * @type {boolean}
   */
  available: boolean

  /**
   * Status reservasi tempat duduk.
   * True jika sudah dipesan oleh user lain.
   * @type {boolean}
   */
  reserved: boolean

  /**
   * Status seleksi tempat duduk.
   * True jika sedang dipilih oleh user.
   * @type {boolean}
   */
  selected: boolean
}

export interface SeatColors {
  /**
   * Kode warna untuk kursi yang tersedia.
   * @type {string}
   * @example '#FFFFFF'
   */
  available: string

  /**
   * Kode warna untuk kursi yang sudah direservasi.
   * @type {string}
   * @example '#CCCCCC'
   */
  reserved: string

  /**
   * Kode warna untuk kursi yang sedang dipilih.
   * @type {string}
   * @example '#00FF00'
   */
  selected: string
}

export interface SeatItem extends SeatPosition, SeatStatus {
  /**
   * ID unik untuk setiap tempat duduk.
   * @type {string}
   * @example 'A1'
   */
  id: string

  /**
   * Label yang ditampilkan pada tempat duduk.
   * @type {string}
   * @example 'A-1'
   */
  label: string
}

export interface SeatButtonProps {
  /**
   * Data tempat duduk yang akan dirender.
   * Berisi informasi posisi dan status kursi.
   * @type {SeatItem}
   * @example
   * <SeatButton seat={{ id: 'A1', row: 'A', column: '1', label: 'A-1', available: true, reserved: false, selected: false }} />
   */
  seat: SeatItem

  /**
   * Function yang dipanggil ketika tempat duduk diklik.
   * Biasanya digunakan untuk mengubah status seleksi kursi.
   * @type {() => void}
   * @example
   * <SeatButton onClick={() => handleSeatSelection('A1')} />
   */
  onClick: () => void

  /**
   * Mengontrol apakah tempat duduk dapat diklik.
   * True jika kursi tidak dapat diseleksi.
   * @type {boolean}
   * @default false
   * @example
   * <SeatButton disabled={isMaxSeatsSelected} />
   */
  disabled?: boolean

  /**
   * Class CSS tambahan untuk kustomisasi tampilan.
   * Menggunakan Tailwind CSS.
   * @type {string}
   * @example
   * <SeatButton className="hover:opacity-80" />
   */
  className?: string

  /**
   * Konfigurasi warna untuk setiap status kursi.
   * Menentukan tampilan visual kursi berdasarkan statusnya.
   * @type {SeatColors}
   * @example
   * <SeatButton seatColors={{ available: '#FFFFFF', reserved: '#CCCCCC', selected: '#00FF00' }} />
   */
  seatColors: SeatColors
}
