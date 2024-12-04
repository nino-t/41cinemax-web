import { MyAtomProps } from '@/components/atoms/MyAtom/MyAtom.interface'

export interface MyMoleculeProps {
  /**
   * Primary content text
   * @type {string}
   * @required
   */
  title: string
  /**
   * Secondary descriptive text
   * @type {string}
   * @optional
   */
  description?: string
  /**
   * Molucule background color
   * @type {'clauds' | 'city-lights'}
   * @default 'clauds'
   */
  backgroundColor?: 'clauds' | 'city-lights'
  /**
   * Button variant
   * @type {MyAtomProps['variant']}
   * @default 'primary'
   */
  buttonVariant?: MyAtomProps['variant']
}
