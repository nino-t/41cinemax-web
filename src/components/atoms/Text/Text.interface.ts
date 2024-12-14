/**
 * Tipe elemen HTML yang dapat digunakan untuk rendering text.
 * h1-h6 untuk heading, p untuk paragraf, span untuk inline text,
 * a untuk link, dan label untuk form label.
 */
type TextAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'label'

/**
 * Ukuran text mengikuti scale Tailwind CSS:
 * xs (12px), sm (14px), base (16px), lg (18px),
 * xl (20px), 2xl (24px), 3xl (30px), 4xl (36px)
 */
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

/**
 * Font weight mengikuti scale Tailwind CSS:
 * normal (400), medium (500), semibold (600), bold (700)
 */
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold'

/**
 * Variasi warna text yang tersedia dalam design system.
 * Menggunakan token warna yang konsisten.
 */
type TextColor = 'default' | 'primary' | 'secondary' | 'error' | 'white'

export interface TextProps {
  /**
   * Konten yang akan ditampilkan dalam komponen Text.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Text>Ini adalah contoh text</Text>
   */
  children: React.ReactNode

  /**
   * Elemen HTML yang akan digunakan untuk me-render text.
   * Membantu dalam semantic HTML dan aksesibilitas.
   * @type {TextAs}
   * @default "p"
   * @example
   * <Text as="h1">Judul Halaman</Text>
   */
  as?: TextAs

  /**
   * Ukuran text menggunakan scale Tailwind CSS.
   * Digunakan untuk hirarki visual yang konsisten.
   * @type {TextSize}
   * @default "base"
   * @example
   * <Text size="xl">Text Besar</Text>
   */
  size?: TextSize

  /**
   * Font weight text menggunakan scale Tailwind CSS.
   * Membantu memberikan emphasis pada text.
   * @type {TextWeight}
   * @default "normal"
   * @example
   * <Text weight="bold">Text Tebal</Text>
   */
  weight?: TextWeight

  /**
   * Warna text sesuai dengan design system.
   * Menggunakan token warna yang telah ditentukan.
   * @type {TextColor}
   * @default "default"
   * @example
   * <Text color="primary">Text Berwarna Primary</Text>
   */
  color?: TextColor

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Berguna untuk styling kustom yang spesifik.
   * @type {string}
   * @example
   * <Text className="italic hover:underline">Text dengan Style Kustom</Text>
   */
  className?: string

  /**
   * Function yang dipanggil saat text diklik.
   * Berguna untuk text yang interaktif seperti link.
   * @type {() => void}
   * @example
   * <Text onClick={() => console.log('Text diklik')}>Text yang Bisa Diklik</Text>
   */
  onClick?: () => void

  /**
   * Inline CSS styles untuk kasus yang membutuhkan styling sangat spesifik.
   * Gunakan className dengan Tailwind sebagai preferensi utama.
   * @type {React.CSSProperties}
   * @example
   * <Text style={{ textIndent: '2em' }}>Text dengan Indent</Text>
   */
  style?: React.CSSProperties
}
