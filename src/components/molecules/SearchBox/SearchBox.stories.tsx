import type { Meta, StoryObj } from '@storybook/react'
import SearchBox from './SearchBox'

const meta: Meta<typeof SearchBox> = {
  title: 'Components/Molecules/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text untuk search box'
    },
    className: {
      control: 'text',
      description: 'Class CSS tambahan menggunakan Tailwind'
    },
    onSearch: {
      description: 'Function yang dipanggil saat melakukan pencarian'
    }
  }
}

export default meta
type Story = StoryObj<typeof SearchBox>

// Default story untuk search box
export const Default: Story = {
  args: {
    placeholder: 'Search Film...',
    onSearch: (value) => console.log('Searching for:', value)
  }
}

// Story dengan custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Cari judul film favorit Anda...',
    onSearch: (value) => console.log('Searching for:', value)
  }
}

// Story dengan custom styling
export const CustomStyling: Story = {
  args: {
    placeholder: 'Search Film...',
    className: 'bg-gray-50 shadow-lg rounded-lg',
    onSearch: (value) => console.log('Searching for:', value)
  }
}

// Story dengan search handler yang lebih kompleks
export const WithComplexHandler: Story = {
  args: {
    placeholder: 'Search Film...',
    onSearch: (value) => {
      console.log('Search initiated')
      console.log('Search query:', value)
      console.log('Timestamp:', new Date().toISOString())
      alert(`Searching for: ${value}`)
    }
  }
}

// Story untuk demonstrasi validasi
export const WithValidation: Story = {
  args: {
    placeholder: 'Minimal 3 karakter...',
    onSearch: (value) => {
      if (value.length < 3) {
        alert('Search query harus minimal 3 karakter!')
        return
      }
      console.log('Searching for:', value)
    }
  }
}
