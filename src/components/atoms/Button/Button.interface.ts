export interface ButtonProps {
  /**
   * The type of the button.
   * @type {'button' | 'submit' | 'reset'}
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * The variant of the button.
   * @type {'primary' | 'secondary'}
   * @default 'primary'
   * @example <Button variant="secondary">Cancel</Button>
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  /**
   * The content of the button.
   * @type {React.ReactNode}
   * @example <Button>Login</Button>
   */
  children: React.ReactNode
  /**
   * Set the button to full width.
   * @type {boolean}
   * @default false
   */
  fullWidth?: boolean
  /**
   * Additional classes to be added to the button.
   * @type {string}
   * @example <Button className="text-red-500">Delete</Button>
   */
  className?: string
  /**
   * Event handler when the button is clicked.
   * @returns
   */
  onClick?: () => void
  /**
   * Set the button to rounded.
   * @type {boolean}
   * @default false
   */
  rounded?: boolean
  /**
   * Set the button to disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to be added to the button.
   * @type {React.ReactNode}
   * @example <Button icon={<Ticket />}>Get Tickets</Button>
   */
  icon?: React.ReactNode
  /**
   * Set the button to loading state.
   * @type {boolean}
   * @default false
   */
  loading?: boolean
}
