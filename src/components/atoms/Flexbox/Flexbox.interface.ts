export interface FlexboxProps {
  /**
   * The content of the flexbox.
   * @type React.ReactNode
   * @example <Flexbox>...</Flexbox>
   */
  children: React.ReactNode
  /**
   * The direction of the flexbox.
   * @type 'row' | 'col'
   * @default 'row'
   */
  direction?: 'row' | 'col'
  /**
   * The alignment of the flexbox.
   * @type 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
   * @default 'start'
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /**
   * The alignment of the flexbox.
   * @type 'start' | 'end' | 'center' | 'baseline' | 'stretch'
   * @default 'start'
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /**
   * The wrapping of the flexbox.
   * @type 'wrap' | 'nowrap' | 'wrap-reverse'
   * @default 'wrap'
   */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  /**
   * The gap between the flexbox items.
   * @type 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16
   * @default 0
   */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16
  /**
   * Additional classes to be added to the flexbox.
   * @type string
   * @example <Flexbox className="text-center">...</Flexbox>
   */
  className?: string
  /**
   * Handler to be called when the flexbox is clicked.
   * @returns
   */
  onClick?: () => void
}
