export interface CheckboxProps {
  /**
   * Teks label yang ditampilkan di sebelah checkbox
   * @type {string}
   * @optional
   * @example
   * label="Setuju dengan Syarat dan Ketentuan"
   */
  label?: string

  /**
   * Status checked/unchecked dari checkbox
   * @type {boolean}
   * @default false
   * @example
   * checked={true}
   */
  checked?: boolean

  /**
   * Fungsi yang dipanggil saat checkbox di-klik
   * @param {boolean} checked - Status baru dari checkbox setelah di-klik
   * @returns {void}
   * @example
   * const handleChange = (checked: boolean) => {
   *   console.log('Checkbox status:', checked);
   * }
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Class CSS tambahan untuk styling checkbox
   * @type {string}
   * @optional
   * @default ""
   * @example
   * className="opacity-50 cursor-not-allowed"
   */
  className?: string

  /**
   * Menandakan status error pada input field.
   * Saat true, akan menambahkan styling error (border merah).
   * @type {boolean}
   * @default false
   * @example
   * <InputField error={!isValid} />
   */
  error?: boolean
}
