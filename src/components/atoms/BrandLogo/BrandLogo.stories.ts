import type { Meta, StoryObj } from '@storybook/react'
import BrandLogo from './BrandLogo'

const meta = {
  title: 'Components/Atoms/BrandLogo',
  component: BrandLogo,
  tags: ['autodocs']
} satisfies Meta<typeof BrandLogo>

export default meta
type Story = StoryObj<typeof BrandLogo>

export const Default: Story = {
  args: {}
}
