import React from 'react'

export interface ButtonProps {
  /**
   * Function yang dipanggil ketika button diklik.
   * @type {() => void}
   * @example
   * <Button onClick={() => console.log('Button clicked')}>
   *   Click Me
   * </Button>
   */
  onClick?: () => void

  /**
   * HTML type attribute untuk button.
   * @type {'button' | 'submit' | 'reset'}
   * @default 'button'
   * @example <Button type="submit">Submit Form</Button>
   */
  type?: 'button' | 'submit' | 'reset'

  /**
   * Konten yang ditampilkan di dalam button.
   * @type {React.ReactNode}
   * @required
   * @example <Button>Login</Button>
   */
  children: React.ReactNode

  /**
   * Variasi tampilan button.
   * @type {'primary' | 'secondary' | 'outline' | 'text'}
   * @default 'primary'
   * @example
   * <Button variant="secondary">Cancel</Button>
   * <Button variant="outline">Back</Button>
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text'

  /**
   * Mengatur button agar memenuhi lebar container.
   * @type {boolean}
   * @default false
   * @example <Button fullWidth>Submit</Button>
   */
  fullWidth?: boolean

  /**
   * Class CSS tambahan untuk styling kustom.
   * @type {string}
   * @example <Button className="mt-4 hover:bg-red-600">Delete</Button>
   */
  className?: string

  /**
   * Mengatur sudut button menjadi rounded.
   * @type {boolean}
   * @default false
   * @example <Button rounded>Round Button</Button>
   */
  rounded?: boolean

  /**
   * Menonaktifkan interaksi dengan button.
   * @type {boolean}
   * @default false
   * @example <Button disabled>Cannot Click</Button>
   */
  disabled?: boolean

  /**
   * Icon yang ditampilkan di dalam button.
   * @type {React.ReactNode}
   * @example
   * <Button icon={<PlusIcon />}>Add Item</Button>
   * <Button icon={<SaveIcon />}>Save Changes</Button>
   */
  icon?: React.ReactNode

  /**
   * Menampilkan state loading pada button.
   * @type {boolean}
   * @default false
   * @example <Button loading>Processing...</Button>
   */
  loading?: boolean
}
