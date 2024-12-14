import React from 'react'
import { TextProps } from '../../atoms/Text/Text.interface'

export interface CardProps {
  /**
   * Judul utama yang ditampilkan di card.
   * @type {string}
   * @required
   * @example
   * <Card title="Paket Premium" />
   */
  title: string

  /**
   * Elemen tambahan yang ditampilkan setelah judul.
   * Berguna untuk menambahkan icon atau badge.
   * @type {React.ReactNode}
   * @example
   * <Card
   *   title="Item Baru"
   *   afterTitle={<Badge>New</Badge>}
   * />
   */
  afterTitle?: React.ReactNode

  /**
   * Props untuk mengkustomisasi tampilan judul.
   * Menggunakan props dari komponen Text.
   * @type {Omit<TextProps, 'children'>}
   * @example
   * <Card
   *   title="Judul Card"
   *   titleTextProps={{
   *     size: 'xl',
   *     weight: 'bold',
   *     color: 'primary'
   *   }}
   * />
   */
  titleTextProps?: Omit<TextProps, 'children'>

  /**
   * Subjudul yang ditampilkan di bawah judul utama.
   * @type {string}
   * @example
   * <Card
   *   title="Produk A"
   *   subtitle="Deskripsi singkat produk"
   * />
   */
  subtitle?: string

  /**
   * URL gambar thumbnail yang ditampilkan di card.
   * @type {string}
   * @example
   * <Card
   *   title="Artikel"
   *   thumbnail="/images/article-cover.jpg"
   * />
   */
  thumbnail?: string

  /**
   * Mengatur margin untuk thumbnail.
   * Ketika true, thumbnail akan memiliki jarak dari tepi card.
   * @type {boolean}
   * @default false
   * @example
   * <Card
   *   thumbnail="/image.jpg"
   *   hasMarginThumbnail
   * />
   */
  hasMarginThumbnail?: boolean

  /**
   * Konten utama yang ditampilkan di dalam card.
   * @type {React.ReactNode}
   * @example
   * <Card title="Profile">
   *   <p>Informasi profile user...</p>
   *   <Button>Edit Profile</Button>
   * </Card>
   */
  children?: React.ReactNode

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan card.
   * @type {string}
   * @example
   * <Card
   *   title="Custom Card"
   *   className="hover:shadow-lg transition-shadow"
   * />
   */
  className?: string
}
