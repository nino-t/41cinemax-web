import type { Meta, StoryObj } from '@storybook/react'
import { Settings, User, LogOut } from 'lucide-react'
import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Dropdown>

// Base items for dropdown
const defaultItems = [
  {
    children: 'Profile',
    icon: <User className="w-4 h-4" />,
    onClick: () => console.log('Profile clicked')
  },
  {
    children: 'Settings',
    icon: <Settings className="w-4 h-4" />,
    onClick: () => console.log('Settings clicked')
  },
  {
    children: 'Logout',
    icon: <LogOut className="w-4 h-4" />,
    onClick: () => console.log('Logout clicked')
  }
]

// Basic usage
export const Default: Story = {
  args: {
    items: defaultItems,
    children: <button type="button">Open Menu</button>
  }
}

// No icons variant
export const NoIcons: Story = {
  args: {
    items: [
      {
        children: 'View Profile',
        onClick: () => console.log('View Profile clicked')
      },
      {
        children: 'Edit Settings',
        onClick: () => console.log('Edit Settings clicked')
      },
      { children: 'Sign Out', onClick: () => console.log('Sign Out clicked') }
    ],
    children: <button type="button">Simple Menu</button>
  }
}
