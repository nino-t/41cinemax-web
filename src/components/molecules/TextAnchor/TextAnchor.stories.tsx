import type { Meta, StoryObj } from '@storybook/react'

import TextAnchor from './TextAnchor'

const meta: Meta<typeof TextAnchor> = {
  title: 'Components/Molecules/TextAnchor',
  component: TextAnchor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof TextAnchor>

// Basic TextAnchor
export const Basic: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Link clicked!')
  }
}

// With longer text
export const LongText: Story = {
  args: {
    children: 'Click here to learn more about our terms and conditions',
    onClick: () => alert('Terms link clicked!')
  }
}

// With custom className
export const CustomStyle: Story = {
  args: {
    children: 'Custom styled link',
    onClick: () => alert('Custom styled link clicked!'),
    className: 'text-blue-600 hover:text-blue-800 text-lg'
  }
}
