import type { Meta, StoryObj } from '@storybook/react'
import MyOrganism from './MyOrganism'
import { MyMoleculeProps } from '@/components/molecules/MyMolecule/MyMolecule.interface'

const meta = {
  title: 'Components/Organisms/MyOrganism',
  component: MyOrganism,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof MyOrganism>

export default meta
type Story = StoryObj<typeof MyOrganism>

const sampleItems: Omit<MyMoleculeProps, 'buttonVariant'>[] = [
  {
    title: 'Item 1',
    description: 'Description 1',
    backgroundColor: 'clauds'
  },
  {
    title: 'Item 2',
    description: 'Description 2',
    backgroundColor: 'city-lights'
  }
]

export const Default: Story = {
  args: {
    title: 'My Organism',
    items: sampleItems,
    buttonVariant: 'primary'
  }
}
