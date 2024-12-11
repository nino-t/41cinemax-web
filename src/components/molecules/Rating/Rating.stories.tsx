import type { Meta, StoryObj } from '@storybook/react'
import Rating from './Rating'

const meta: Meta<typeof Rating> = {
  title: 'Components/Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 }
    }
  }
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    rating: 4.5
  }
}

export const Variations: Story = {
  render: () => (
    <div className="space-x-4">
      <Rating rating={5.0} />
      <Rating rating={4.5} />
      <Rating rating={3.7} />
      <Rating rating={2.8} />
      <Rating rating={1.5} />
    </div>
  )
}
