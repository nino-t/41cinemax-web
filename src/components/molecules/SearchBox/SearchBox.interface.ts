export interface SearchBoxProps {
  /**
   * Function yang dipanggil untuk melakukan pencarian.
   * Menerima value string dari input search.
   * @type {(value: string) => void}
   * @example
   * <SearchBox onSearch={(value) => searchMovies(value)} />
   */
  onSearch?: (value: string) => void

  /**
   * Teks petunjuk yang muncul saat search box kosong.
   * @type {string}
   * @default 'Search Film...'
   * @example
   * <SearchBox placeholder="Cari judul film..." />
   */
  placeholder?: string

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan search box.
   * @type {string}
   * @example
   * <SearchBox className="w-full md:w-96" />
   */
  className?: string
}
