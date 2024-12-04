import { MyMoleculeProps } from '@/components/molecules/MyMolecule/MyMolecule.interface'

export interface MyOrganismProps {
  /**
   * Organism title
   * @type {string}
   * @required
   */
  title: string
  /**
   * List of molecule items to display
   * @type {Omit<MyMoleculeProps, 'buttonVariant'>[]}
   * @required
   */
  items: Omit<MyMoleculeProps, 'buttonVariant'>[]
  /**
   * Controls molecules button variant
   * @type {MyMoleculeProps['buttonVariant']}
   * @default 'primary'
   */
  buttonVariant?: MyMoleculeProps['buttonVariant']
}
