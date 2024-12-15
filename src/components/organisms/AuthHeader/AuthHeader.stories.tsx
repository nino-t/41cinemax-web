import type { Meta, StoryObj } from '@storybook/react'

import AuthHeader from './AuthHeader'

const meta = {
  title: 'Components/Organisms/AuthHeader',
  component: AuthHeader,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof AuthHeader>

export default meta
type Story = StoryObj<typeof AuthHeader>

// Default header
export const Default: Story = {}

// With different background
export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100">
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story:
          'AuthHeader displayed against a dark background to demonstrate border visibility.'
      }
    }
  }
}
