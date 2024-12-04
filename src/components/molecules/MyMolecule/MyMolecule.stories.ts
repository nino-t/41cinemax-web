import type { Meta, StoryObj } from '@storybook/react'
import MyMolecule from './MyMolecule'

const meta = {
  title: 'Components/Molecules/MyMolecule',
  component: MyMolecule,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof MyMolecule>

export default meta
type Story = StoryObj<typeof MyMolecule>

export const Clauds: Story = {
  args: {
    title: 'My Molecule Title',
    description: 'This is a description of my molecule component',
    backgroundColor: 'clauds',
    buttonVariant: 'primary'
  }
}

export const CityLights: Story = {
  args: {
    title: 'My Molecule Title',
    description: 'This is a description of my molecule component',
    backgroundColor: 'city-lights',
    buttonVariant: 'secondary'
  }
}
