export interface MyAtomProps {
  /**
   * The text to display
   * @type {string}
   * @example "Hello World"
   * @required
   */
  text: string
  /**
   * The variant of the button
   * @type {'primary' | 'secondary'}
   * @default 'primary'
   * @optional
   */
  variant?: 'primary' | 'secondary'
  /**
   * Callback function when the button is clicked
   * @type {() => void}
   * @example () => console.log('Button clicked')
   * @optional
   */
  onClick?: () => void
}
