import type { Meta, StoryObj } from '@storybook/react'
import CinemaScreen from './CinemaScreen'

const meta: Meta<typeof CinemaScreen> = {
  title: 'Components/Atoms/CinemaScreen',
  component: CinemaScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof CinemaScreen>

export const Default: Story = {}
