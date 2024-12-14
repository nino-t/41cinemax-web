export interface InputFieldProps {
  /**
   * Tipe input field yang ditampilkan.
   * @type {'text' | 'password' | 'email' | 'number'}
   * @default 'text'
   * @example
   * <InputField type="password" />
   */
  type?: 'text' | 'password' | 'email' | 'number'

  /**
   * Nilai/teks yang ditampilkan dalam input field.
   * Biasanya digunakan dengan state management.
   * @type {string}
   * @default ''
   * @example
   * <InputField value={name} onChange={setName} />
   */
  value?: string

  /**
   * Function yang dipanggil setiap kali value input berubah.
   * Menerima event yang berisi value terbaru.
   * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
   * @example
   * <InputField onChange={(e) => setName(e.target.value)} />
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Function yang dipanggil ketika user menekan tombol keyboard.
   * Berguna untuk handling seperti submit saat tekan Enter.
   * @type {(e: React.KeyboardEvent) => void}
   * @example
   * <InputField onKeyPress={(e) => e.key === 'Enter' && handleSubmit()} />
   */
  onKeyPress?: (e: React.KeyboardEvent) => void

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk styling kustom pada input field.
   * @type {string}
   * @example
   * <InputField className="w-full px-4 rounded-lg" />
   */
  className?: string

  /**
   * Teks yang ditampilkan sebagai petunjuk saat input kosong.
   * @type {string}
   * @default '.....'
   * @example
   * <InputField placeholder="Masukkan nama..." />
   */
  placeholder?: string

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
