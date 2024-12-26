export interface ProfileDropdownProps {
  /**
   * URL gambar avatar untuk profile dropdown.
   * @type {string}
   * @default '/avatar-404.png'
   * @example
   * <ProfileDropdown avatarUrl="/images/user-avatar.jpg" />
   */
  avatarUrl?: string

  /**
   * Nama pengguna yang akan ditampilkan di profile dropdown.
   * @type {string}
   * @example
   * <ProfileDropdown username="John Doe" />
   */
  username: string

  /**
   * Function yang dipanggil ketika tombol profile diklik.
   * @type {() => void}
   * @example
   * <ProfileDropdown
   *   onProfileClick={() => router.push('/profile')}
   * />
   */
  onProfileClick?: () => void

  /**
   * Function yang dipanggil ketika tombol riwayat transaksi diklik.
   * @type {() => void}
   * @example
   * <ProfileDropdown
   *   onTransactionHistoryClick={() => router.push('/transactions')}
   * />
   */
  onTransactionHistoryClick?: () => void

  /**
   * Function yang dipanggil ketika tombol logout diklik.
   * @type {() => void}
   * @example
   * <ProfileDropdown
   *   onLogout={() => {
   *     auth.logout()
   *     router.push('/login')
   *   }}
   * />
   */
  onLogout?: () => void
}
