import { SeatItem } from '../../molecules/SeatButton/SeatButton.interface'

export interface SeatsProps {
  /**
   * Data seluruh tempat duduk yang akan ditampilkan.
   * Berisi array dari objek seat yang memiliki informasi posisi dan status.
   * @type {SeatItem[]}
   * @example
   * <Seats
   *   seats={[
   *     { id: 'A1', row: 'A', column: '1', label: 'A-1', available: true, reserved: false, selected: false },
   *     { id: 'A2', row: 'A', column: '2', label: 'A-2', available: true, reserved: false, selected: false }
   *   ]}
   * />
   */
  seats: SeatItem[]

  /**
   * Function yang dipanggil ketika user memilih tempat duduk.
   * Menerima parameter berupa object SeatItem yang dipilih.
   * @type {(seat: SeatItem) => void}
   * @example
   * <Seats onSeatSelect={(seat) => handleSeatSelection(seat)} />
   */
  onSeatSelect: (seat: SeatItem) => void

  /**
   * Jumlah maksimal tempat duduk yang dapat dipilih.
   * Membatasi jumlah kursi yang bisa diseleksi user.
   * @type {number}
   * @default 6
   * @example
   * <Seats maxSelect={4} />
   */
  maxSelect?: number

  /**
   * Class CSS tambahan untuk kustomisasi tampilan container seats.
   * Menggunakan Tailwind CSS.
   * @type {string}
   * @example
   * <Seats className="gap-2 p-4" />
   */
  className?: string

  /**
   * Indeks kolom untuk menambahkan spasi antar kursi.
   * Berguna untuk membuat gang/jalan di antara kelompok kursi.
   * @type {number[]}
   * @default []
   * @example
   * <Seats spaceInColumns={[4, 8]} />
   */
  spaceInColumns?: number[]
}
