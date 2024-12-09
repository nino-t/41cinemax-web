import type { Meta, StoryObj } from '@storybook/react'
import SkeletonBase from './SkeletonBase'

const meta: Meta<typeof SkeletonBase> = {
  title: 'Components/Atoms/SkeletonBase',
  component: SkeletonBase,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof SkeletonBase>

export const Default: Story = {
  args: {
    className: 'w-48 h-6'
  }
}
