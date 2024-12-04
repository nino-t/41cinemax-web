import type { Meta, StoryObj } from '@storybook/react'
import MyAtom from './MyAtom'

const meta = {
  title: 'Components/Atoms/MyAtom',
  component: MyAtom,
  tags: ['autodocs']
} satisfies Meta<typeof MyAtom>

export default meta
type Story = StoryObj<typeof MyAtom>

export const Primary: Story = {
  args: {
    text: 'MyAtom Component',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    text: 'MyAtom Component',
    variant: 'secondary'
  }
}
