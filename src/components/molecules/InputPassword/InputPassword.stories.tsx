import type { Meta, StoryObj } from '@storybook/react'
import InputPassword from './InputPassword'

const meta: Meta<typeof InputPassword> = {
  title: 'Components/Molecules/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text untuk input password'
    },
    error: {
      control: 'boolean',
      description: 'Status error pada input password'
    },
    className: {
      control: 'text',
      description: 'Class CSS tambahan menggunakan Tailwind'
    }
  }
}

export default meta
type Story = StoryObj<typeof InputPassword>

// Default story untuk input password
export const Default: Story = {
  args: {
    placeholder: 'Masukkan password...'
  }
}

// Story dengan nilai default
export const WithValue: Story = {
  args: {
    placeholder: 'Masukkan password...',
    value: 'password123'
  }
}

// Story untuk state error
export const WithError: Story = {
  args: {
    placeholder: 'Password tidak valid',
    error: true,
    value: 'pass'
  }
}

// Story dengan custom styling
export const CustomStyling: Story = {
  args: {
    placeholder: 'Custom styled password',
    className: 'bg-gray-50 text-lg',
    value: 'mypassword'
  }
}

// Story untuk interactive example dengan onChange
export const Interactive: Story = {
  args: {
    placeholder: 'Ketik password...',
    onChange: (e) => console.log('Password value:', e.target.value)
  }
}
