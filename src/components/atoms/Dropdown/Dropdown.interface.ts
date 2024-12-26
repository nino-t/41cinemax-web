import React from 'react'

export interface DropdownItemProps {
  /**
   * Function yang dipanggil ketika item diklik.
   * @type {() => void}
   * @example
   * <DropdownItem onClick={() => console.log('Item clicked')}>
   *   Settings
   * </DropdownItem>
   */
  onClick?: () => void

  /**
   * Icon yang ditampilkan di sebelah kiri item.
   * @type {React.ReactNode}
   * @example
   * <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
   * <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
   */
  icon?: React.ReactNode

  /**
   * Konten yang ditampilkan di dalam item dropdown.
   * @type {React.ReactNode}
   * @required
   * @example <DropdownItem>Logout</DropdownItem>
   */
  children: React.ReactNode

  /**
   * Class CSS tambahan untuk styling kustom.
   * @type {string}
   * @example <DropdownItem className="font-bold text-red-500">Delete</DropdownItem>
   */
  className?: string

  /**
   * Variasi tampilan item dropdown.
   * @type {'default' | 'danger'}
   * @default 'default'
   * @example
   * <DropdownItem variant="danger">Delete Account</DropdownItem>
   */
  variant?: 'default' | 'danger'

  /**
   * Mengatur item sebagai garis pembatas.
   * @type {boolean}
   * @default false
   * @example
   * <DropdownItem>Profile</DropdownItem>
   * <DropdownItem divider />
   * <DropdownItem>Logout</DropdownItem>
   */
  divider?: boolean
}

export interface DropdownProps {
  /**
   * Daftar item yang ditampilkan dalam dropdown.
   * @type {DropdownItemProps[]}
   * @required
   * @example
   * const items = [
   *   { children: 'Profile' },
   *   { children: 'Settings' },
   *   { divider: true },
   *   { children: 'Logout', variant: 'danger' }
   * ]
   * <Dropdown items={items}>Toggle</Dropdown>
   */
  items: DropdownItemProps[]

  /**
   * Elemen yang berfungsi sebagai trigger dropdown.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Dropdown items={items}>
   *   <Button>Menu</Button>
   * </Dropdown>
   */
  children: React.ReactNode

  /**
   * Class CSS tambahan untuk styling kustom.
   * @type {string}
   * @example
   * <Dropdown className="mt-2" items={items}>
   *   Open Menu
   * </Dropdown>
   */
  className?: string
}
