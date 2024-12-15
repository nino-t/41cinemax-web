import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Modal from './Modal'
import Button from '@/components/atoms/Button'
import { AlertCircle, Trash2, FileText } from 'lucide-react'

const meta: Meta<typeof Modal> = {
  title: 'Components/Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Modal>

// Story untuk modal dasar
export const Default: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          title="Konfirmasi"
          onCancel={() => setIsOpen(false)}
          onOk={() => {
            console.log('OK clicked')
            setIsOpen(false)
          }}
        >
          <p>Ini adalah contoh modal sederhana dengan tombol OK dan Cancel.</p>
        </Modal>
      </div>
    )
  }
}

// Story untuk modal konfirmasi delete
export const DeleteConfirmation: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal
          isOpen={isOpen}
          title={
            <div className="flex items-center gap-2 text-red-600">
              <Trash2 className="w-6 h-6" />
              <span>Hapus Item</span>
            </div>
          }
          onCancel={() => setIsOpen(false)}
          onOk={() => {
            console.log('Delete confirmed')
            setIsOpen(false)
          }}
        >
          <div className="flex flex-col gap-4">
            <p>Apakah Anda yakin ingin menghapus item ini?</p>
            <p className="text-sm text-gray-500">
              Tindakan ini tidak dapat dibatalkan dan semua data terkait akan
              terhapus permanen.
            </p>
          </div>
        </Modal>
      </div>
    )
  }
}

// Story untuk modal dengan custom footer
export const CustomFooter: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Show Terms</Button>
        <Modal
          isOpen={isOpen}
          title={
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6" />
              <span>Terms & Conditions</span>
            </div>
          }
          onCancel={() => setIsOpen(false)}
          footer={
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Last updated: Dec 2024</p>
              <Button onClick={() => setIsOpen(false)}>Got it</Button>
            </div>
          }
        >
          <div className="prose prose-sm">
            <p>Ini adalah contoh modal dengan custom footer.</p>
            <p>Footer menampilkan informasi tambahan dan single button.</p>
          </div>
        </Modal>
      </div>
    )
  }
}

// Story untuk modal warning
export const Warning: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Show Warning</Button>
        <Modal
          isOpen={isOpen}
          title={
            <div className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="w-6 h-6" />
              <span>Peringatan</span>
            </div>
          }
          onCancel={() => setIsOpen(false)}
          onOk={() => {
            console.log('Warning acknowledged')
            setIsOpen(false)
          }}
          className="border-t-4 border-t-yellow-500"
        >
          <div className="flex flex-col gap-3">
            <p>Anda akan meninggalkan halaman ini.</p>
            <p className="text-sm text-gray-500">
              Pastikan semua perubahan telah disimpan sebelum melanjutkan.
            </p>
          </div>
        </Modal>
      </div>
    )
  }
}

// Story untuk modal dengan konten panjang
export const LongContent: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Show Details</Button>
        <Modal
          isOpen={isOpen}
          title="Informasi Lengkap"
          onCancel={() => setIsOpen(false)}
          className="max-w-2xl"
        >
          <div className="max-h-96 overflow-y-auto">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-medium mb-2">Section {i + 1}</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
          </div>
        </Modal>
      </div>
    )
  }
}
