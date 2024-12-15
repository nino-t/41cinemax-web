import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Snackbar from './Snackbar'

const meta = {
  title: 'Components/Molecules/Snackbar',
  component: Snackbar,
  tags: ['autodocs']
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof Snackbar>

// Basic success snackbar
export const Success: Story = {
  args: {
    message: 'Data berhasil disimpan',
    type: 'success',
    show: true,
    onClose: () => {},
    autoHideDuration: 3000
  }
}

// Error snackbar
export const Error: Story = {
  args: {
    message: 'Gagal menyimpan data',
    type: 'error',
    show: true,
    onClose: () => {},
    autoHideDuration: 3000
  }
}

// Interactive example with controls
const InteractiveSnackbarTemplate: Story['render'] = () => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState<'success' | 'error'>('success')

  const handleShowSnackbar = (snackbarType: 'success' | 'error') => {
    setType(snackbarType)
    setShow(true)
  }

  return (
    <div className="space-x-4">
      <button
        onClick={() => handleShowSnackbar('success')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Show Success
      </button>
      <button
        onClick={() => handleShowSnackbar('error')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Show Error
      </button>
      <Snackbar
        show={show}
        type={type}
        message={type === 'success' ? 'Berhasil!' : 'Terjadi kesalahan!'}
        onClose={() => setShow(false)}
        autoHideDuration={3000}
      />
    </div>
  )
}

export const Interactive: Story = {
  render: InteractiveSnackbarTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example showing both success and error states with buttons to trigger the snackbar.'
      }
    }
  }
}

// Long message example
export const LongMessage: Story = {
  args: {
    message:
      'Ini adalah contoh pesan yang sangat panjang untuk menunjukkan bagaimana snackbar menangani pesan yang lebih dari satu baris. Pesan ini akan ditampilkan dengan baik dalam komponen.',
    type: 'success',
    show: true,
    onClose: () => {},
    autoHideDuration: 5000
  }
}

// Custom duration example
export const CustomDuration: Story = {
  args: {
    message: 'Snackbar ini akan ditampilkan selama 10 detik',
    type: 'success',
    show: true,
    onClose: () => {},
    autoHideDuration: 10000
  }
}
