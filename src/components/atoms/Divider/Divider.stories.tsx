import type { Meta, StoryObj } from '@storybook/react'
import Divider from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {}

export const InContent: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-gray-700">First paragraph of content</p>
      <Divider />
      <p className="text-gray-700">Second paragraph of content</p>
    </div>
  )
}

export const InCard: Story = {
  render: () => (
    <div className="max-w-sm p-4 border rounded-lg shadow-sm">
      <h3 className="font-medium">Card Title</h3>
      <Divider />
      <p className="mt-3 text-gray-600">Card content goes here</p>
    </div>
  )
}
