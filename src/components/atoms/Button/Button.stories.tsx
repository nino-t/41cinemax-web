import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { Heart } from 'lucide-react'

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked')
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
}

export const Text: Story = {
  args: {
    variant: 'text'
  }
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true
  }
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true
  }
}

export const Rounded: Story = {
  args: {
    variant: 'primary',
    rounded: true
  }
}

export const Icon: Story = {
  args: {
    variant: 'primary',
    icon: <Heart />
  }
}
