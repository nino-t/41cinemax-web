import type { Meta, StoryObj } from '@storybook/react'

import MainFooter from './MainFooter'

const meta = {
  title: 'Components/Organisms/MainFooter',
  component: MainFooter,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MainFooter>

export default meta
type Story = StoryObj<typeof MainFooter>

// Default view
export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">Content</div>
        <Story />
      </div>
    )
  ]
}

// With page content
export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow p-4">
          <div className="h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            Main Content Area
          </div>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            More Content
          </div>
        </div>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Footer shown with example page content to demonstrate spacing and layout.'
      }
    }
  }
}
