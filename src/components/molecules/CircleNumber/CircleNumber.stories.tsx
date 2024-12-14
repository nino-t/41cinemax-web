import type { Meta, StoryObj } from '@storybook/react'
import CircleNumber from './CircleNumber'
import Flexbox from '@/components/atoms/Flexbox'

const meta: Meta<typeof CircleNumber> = {
  title: 'Components/Molecules/CircleNumber',
  component: CircleNumber,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    number: {
      control: 'number',
      description: 'Number to display',
      defaultValue: 1
    }
  }
}

export default meta
type Story = StoryObj<typeof CircleNumber>

export const Default: Story = {
  args: {
    number: 1
  }
}

export const Sequence: Story = {
  render: () => (
    <Flexbox gap={4}>
      <CircleNumber number={1} />
      <CircleNumber number={2} />
      <CircleNumber number={3} />
      <CircleNumber number={4} />
      <CircleNumber number={5} />
    </Flexbox>
  )
}

export const SingleDigit: Story = {
  render: () => (
    <Flexbox gap={4}>
      {[1, 3, 5, 7, 9].map((num) => (
        <CircleNumber key={num} number={num} />
      ))}
    </Flexbox>
  )
}

export const DoubleDigit: Story = {
  render: () => (
    <Flexbox gap={4}>
      {[10, 25, 50, 75, 99].map((num) => (
        <CircleNumber key={num} number={num} />
      ))}
    </Flexbox>
  )
}
