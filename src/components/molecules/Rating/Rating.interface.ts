export interface RatingProps {
  /**
   * The rating to be displayed.
   * @type {number}
   * @required
   * @example 4.5
   */
  rating: number
  /**
   * An optional class name for the rating.
   * @type {string}
   * @optional
   * @example "my-custom-class"
   */
  className?: string
}
