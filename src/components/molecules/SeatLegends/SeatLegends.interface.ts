export interface SeatLegendProps {
  /**
   * Warna untuk menandai kursi yang tersedia/dapat dipilih.
   * Menggunakan class Tailwind CSS untuk background color.
   * @type {string}
   * @example
   * <SeatLegend availableColor="bg-emerald-500" />
   */
  availableColor: string

  /**
   * Warna untuk menandai kursi yang sudah direservasi/tidak tersedia.
   * Menggunakan class Tailwind CSS untuk background color.
   * @type {string}
   * @example
   * <SeatLegend reservedColor="bg-gray-500" />
   */
  reservedColor: string

  /**
   * Warna untuk menandai kursi yang sedang dipilih user.
   * Menggunakan class Tailwind CSS untuk background color.
   * @type {string}
   * @example
   * <SeatLegend selectedColor="bg-sky-500" />
   */
  selectedColor: string
}
