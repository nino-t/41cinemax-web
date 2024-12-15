import React from 'react'

import { X } from 'lucide-react'

import Button from '../../atoms/Button'
import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { ModalProps } from './Modal.interface'

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onCancel,
  onOk,
  children,
  footer,
  className = ''
}) => {
  if (!isOpen) return null
  return (
    <Flexbox justify="center" align="center" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />

      <div
        className={`relative bg-white rounded-lg w-full max-w-md mx-4 ${className}`}
      >
        <button
          onClick={onCancel}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="p-6 pb-0 mb-6 pr-8">
          {typeof title === 'string' ? (
            <Text as="h3" size="xl" weight="bold">
              {title}
            </Text>
          ) : (
            title
          )}
        </div>

        <div className="p-6 space-y-4">{children}</div>

        <div className="p-6 pt-0">
          {footer || (
            <Flexbox gap={4} justify="end">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={onOk}>
                Submit
              </Button>
            </Flexbox>
          )}
        </div>
      </div>
    </Flexbox>
  )
}

export default Modal
