import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Movies', to: '/movies' },
      { label: 'Inception' }
    ]
  }
}
