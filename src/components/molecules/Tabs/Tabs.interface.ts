import React from 'react'

export interface TabProps {
  /**
   * Key dari tab yang sedang aktif/terpilih.
   * Digunakan untuk menentukan tab mana yang ditampilkan.
   * @type {string}
   * @required
   * @example
   * <Tabs activeTab="overview" />
   */
  activeTab: string

  /**
   * Kumpulan data tab yang akan dirender.
   * Setiap tab memiliki key (identifier), label (teks tab), dan element (konten tab).
   * @type {Array<{ key: string; label: string; element: React.ReactNode; }>}
   * @required
   * @example
   * <Tabs
   *   tabs={[
   *     {
   *       key: 'overview',
   *       label: 'Overview',
   *       element: <OverviewContent />
   *     },
   *     {
   *       key: 'reviews',
   *       label: 'Reviews',
   *       element: <ReviewsList />
   *     }
   *   ]}
   * />
   */
  tabs: Array<{
    /** Unique identifier untuk tab */
    key: string
    /** Teks yang ditampilkan pada tab */
    label: string
    /** Konten yang ditampilkan ketika tab aktif */
    element: React.ReactNode
  }>

  /**
   * Function yang dipanggil saat user mengklik tab yang berbeda.
   * Menerima key dari tab yang diklik sebagai parameter.
   * @type {(key: string) => void}
   * @required
   * @example
   * <Tabs
   *   onTabChange={(key) => setActiveTab(key)}
   * />
   */
  onTabChange: (key: string) => void

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan tabs container.
   * @type {string}
   * @example
   * <Tabs className="mt-4 bg-gray-50" />
   */
  className?: string
}
