import type { Meta, StoryObj } from '@storybook/react'
import ProfileDropdown from './ProfileDropdown'

const meta: Meta<typeof ProfileDropdown> = {
  title: 'Components/Molecules/ProfileDropdown',
  component: ProfileDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof ProfileDropdown>

export const Default: Story = {
  args: {
    username: 'John Doe',
    onProfileClick: () => console.log('Profile clicked'),
    onTransactionHistoryClick: () => console.log('Transaction History clicked'),
    onLogout: () => console.log('Logout clicked')
  }
}

export const WithCustomAvatar: Story = {
  args: {
    username: 'Jane Smith',
    avatarUrl: 'https://placehold.co/100x100',
    onProfileClick: () => console.log('Profile clicked'),
    onTransactionHistoryClick: () => console.log('Transaction History clicked'),
    onLogout: () => console.log('Logout clicked')
  }
}

export const LongUsername: Story = {
  args: {
    username: 'Very Long Username That Might Need Truncation',
    onProfileClick: () => console.log('Profile clicked'),
    onTransactionHistoryClick: () => console.log('Transaction History clicked'),
    onLogout: () => console.log('Logout clicked')
  }
}
