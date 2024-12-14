import React from 'react'

export interface SectionProps {
  /**
   * Konten yang akan ditampilkan dalam section.
   * Bisa berisi komponen, teks, atau elemen React lainnya.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Section>
   *   <h2>Judul Section</h2>
   *   <p>Konten section...</p>
   * </Section>
   */
  children: React.ReactNode

  /**
   * Mengatur sudut section menjadi rounded menggunakan border-radius Tailwind CSS.
   * Ketika true, akan menerapkan class 'rounded-lg'.
   * @type {boolean}
   * @default false
   * @example
   * <Section rounded>
   *   Section dengan sudut melengkung
   * </Section>
   */
  rounded?: boolean

  /**
   * Class CSS tambahan menggunakan Tailwind CSS untuk styling kustom.
   * @type {string}
   * @example
   * <Section className="bg-gray-100 p-6">
   *   Section dengan background dan padding
   * </Section>
   */
  className?: string
}
