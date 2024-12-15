export interface SnackbarProps {
  /**
   * Pesan yang akan ditampilkan dalam snackbar kepada user.
   * @type {string}
   * @example
   * <Snackbar message="Data berhasil disimpan" />
   */
  message: string

  /**
   * Tipe snackbar untuk menentukan tampilan visual.
   * Memiliki opsi 'success' atau 'error'.
   * @type {'success' | 'error'}
   * @default 'success'
   * @example
   * <Snackbar type="error" message="Gagal menyimpan data" />
   */
  type?: 'success' | 'error'

  /**
   * State untuk mengontrol visibilitas snackbar.
   * True untuk menampilkan, false untuk menyembunyikan.
   * @type {boolean}
   * @example
   * <Snackbar show={isError} message="Terjadi kesalahan" />
   */
  show: boolean

  /**
   * Function yang dipanggil saat snackbar ditutup.
   * Biasanya digunakan untuk mereset state show.
   * @type {() => void}
   * @example
   * <Snackbar onClose={() => setShowSnackbar(false)} />
   */
  onClose: () => void

  /**
   * Durasi tampilan snackbar sebelum otomatis hilang.
   * Dalam satuan milidetik (ms).
   * @type {number}
   * @default 3000
   * @example
   * <Snackbar autoHideDuration={5000} message="Akan hilang dalam 5 detik" />
   */
  autoHideDuration?: number
}
