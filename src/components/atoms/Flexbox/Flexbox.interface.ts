export interface FlexboxProps {
  /**
   * Menentukan tipe tampilan flex container.
   * @type {'flex' | 'inline-flex'}
   * @default 'flex'
   * @example
   * <Flexbox type="inline-flex">Konten sebaris dengan elemen lain</Flexbox>
   */
  type?: 'flex' | 'inline-flex'

  /**
   * Konten yang akan ditampilkan di dalam flex container.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Flexbox><div>Item 1</div><div>Item 2</div></Flexbox>
   */
  children: React.ReactNode

  /**
   * Mengatur arah penataan flex items.
   * @type {'row' | 'col'}
   * @default 'row'
   * @example
   * <Flexbox direction="col">Item ditata secara vertikal</Flexbox>
   */
  direction?: 'row' | 'col'

  /**
   * Mengatur penataan items secara horizontal dalam container.
   * @type {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'}
   * @default 'start'
   * @example
   * <Flexbox justify="between">Items dengan spacing otomatis di antara</Flexbox>
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

  /**
   * Mengatur penataan items secara vertikal dalam container.
   * @type {'start' | 'end' | 'center' | 'baseline' | 'stretch'}
   * @default 'start'
   * @example
   * <Flexbox align="center">Items rata tengah secara vertikal</Flexbox>
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'

  /**
   * Mengatur perilaku wrapping items ketika melebihi lebar container.
   * @type {'wrap' | 'nowrap' | 'wrap-reverse'}
   * @default 'wrap'
   * @example
   * <Flexbox wrap="nowrap">Items tetap dalam satu baris</Flexbox>
   */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'

  /**
   * Mengatur jarak antar items menggunakan spacing Tailwind CSS.
   * Value mengikuti spacing scale Tailwind: 0 = 0px, 1 = 0.25rem (4px), 2 = 0.5rem (8px), dst.
   * @type {0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16}
   * @default 0
   * @example
   * <Flexbox gap={4}>Items dengan jarak 1rem (16px)</Flexbox>
   */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16

  /**
   * Class CSS tambahan untuk styling kustom menggunakan Tailwind CSS.
   * @type {string}
   * @example
   * <Flexbox className="bg-gray-100 p-4">Flexbox dengan background dan padding</Flexbox>
   */
  className?: string

  /**
   * Function yang dipanggil saat flexbox diklik.
   * @type {() => void}
   * @example
   * <Flexbox onClick={() => console.log('clicked')}>Flexbox yang bisa diklik</Flexbox>
   */
  onClick?: () => void
}
