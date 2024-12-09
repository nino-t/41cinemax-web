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
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold'
type TextColor = 'default' | 'primary' | 'secondary' | 'error' | 'white'

export interface TextProps {
  /**
   * The content to be displayed.
   * @type {React.ReactNode}
   * @required
   * @example "Hello, world!"
   */
  children: React.ReactNode
  /**
   * The HTML element to be rendered.
   * @type {TextAs}
   * @optional
   * @default "p"
   * @example "h1"
   */
  as?: TextAs
  /**
   * The size of the text.
   * @type {TextSize}
   * @optional
   * @default "base"
   * @example "lg"
   */
  size?: TextSize
  /**
   * The weight of the text.
   * @type {TextWeight}
   * @optional
   * @default "normal"
   * @example "bold"
   */
  weight?: TextWeight
  /**
   * The color of the text.
   * @type {TextColor}
   * @optional
   * @default "default"
   * @example "primary"
   */
  color?: TextColor
  /**
   * An optional class name for the text.
   * @type {string}
   * @optional
   * @example "my-custom-class"
   */
  className?: string
  /**
   * An optional click handler for the text.
   * @type {() => void}
   * @optional
   */
  onClick?: () => void
  /**
   * An optional style object for the text.
   * @type {React.CSSProperties}
   * @optional
   */
  style?: React.CSSProperties
}
