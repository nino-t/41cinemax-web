export interface BreadcrumbItem {
  /**
   * Teks yang ditampilkan pada item breadcrumb.
   * @type {string}
   * @required
   * @example 'Home', 'Products', 'Category'
   */
  label: string

  /**
   * Tujuan navigasi ketika item diklik.
   * @type {string}
   * @example
   * to: '/products'
   */
  to?: string
}

export interface BreadcrumbProps {
  /**
   * Daftar item yang ditampilkan dalam breadcrumb.
   * @type {BreadcrumbItem[]}
   * @required
   * @example
   * <Breadcrumb
   *   items={[
   *     { label: 'Home', to: '/' },
   *     { label: 'Products', to: '/products' },
   *     { label: 'Electronics' }
   *   ]}
   * />
   */
  items: BreadcrumbItem[]

  /**
   * Class CSS tambahan untuk styling kustom.
   * @type {string}
   * @example
   * <Breadcrumb
   *   className="mt-4 text-sm"
   *   items={items}
   * />
   */
  className?: string

  /**
   * Karakter atau elemen pemisah antar item breadcrumb.
   * @type {string}
   * @default "/"
   * @example
   * <Breadcrumb
   *   separator=">"
   *   items={items}
   * />
   */
  separator?: string
}
