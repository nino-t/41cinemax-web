import type { Meta, StoryObj } from '@storybook/react'
import InputField from './InputField'

const meta: Meta<typeof InputField> = {
  title: 'Components/Atoms/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Tipe input field yang ditampilkan'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text untuk input field'
    },
    error: {
      control: 'boolean',
      description: 'Status error pada input field'
    },
    className: {
      control: 'text',
      description: 'Class CSS tambahan menggunakan Tailwind'
    }
  }
}

export default meta
type Story = StoryObj<typeof InputField>

// Default story dengan tipe text
export const Default: Story = {
  args: {
    placeholder: 'Masukkan teks...',
    type: 'text'
  }
}

// Story untuk input dengan error state
export const WithError: Story = {
  args: {
    placeholder: 'Input dengan error',
    error: true,
    value: 'Input tidak valid'
  }
}

// Story untuk input password
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Masukkan password...',
    value: 'password123'
  }
}

// Story untuk input email
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
    value: 'user@example.com'
  }
}

// Story untuk input number
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Masukkan angka...',
    value: '42'
  }
}

// Story dengan custom styling
export const CustomStyling: Story = {
  args: {
    placeholder: 'Custom styled input',
    className: 'bg-gray-100 text-lg font-medium'
  }
}

// Story untuk interactive example dengan onChange handler
export const Interactive: Story = {
  args: {
    placeholder: 'Ketik sesuatu...',
    onChange: (e) => console.log('Input value:', e.target.value)
  }
}

// Story untuk input dengan enter key handling
export const WithKeyPress: Story = {
  args: {
    placeholder: 'Tekan Enter...',
    onKeyPress: (e) => {
      if (e.key === 'Enter') {
        console.log('Enter pressed!')
      }
    }
  }
}
