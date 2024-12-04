import { MyOrganismProps } from '@/components/organisms/MyOrganism/MyOrganism.interface'

export interface MyTemplateProps {
  /**
   * Page header title
   * @type {string}
   * @required
   */
  pageTitle: string
  /**
   * List of organisms to display
   * @type {MyOrganismProps[]}
   * @required
   */
  sections: MyOrganismProps[]
}
