import React, { useEffect } from 'react'

import { CheckCircle, X, XCircle } from 'lucide-react'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { SnackbarProps } from './Snackbar.interface'

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = 'success',
  show,
  onClose,
  autoHideDuration = 3000
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }
  }, [show, autoHideDuration, onClose])

  if (!show) return null

  return (
    <Flexbox
      align="center"
      justify="center"
      className="fixed top-4 left-0 right-0 z-50 animate-slide-up"
    >
      <Flexbox
        align="center"
        className={`p-4 rounded-lg shadow-lg relative ${
          type === 'success' ? 'bg-green-100' : 'bg-red-100'
        }`}
      >
        <Flexbox align="center">
          {type === 'success' ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <XCircle className="w-6 h-6 text-red-500" />
          )}
          <Text
            as="span"
            className={`ml-2 ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}
          >
            {message}
          </Text>
        </Flexbox>
        <button
          onClick={onClose}
          className={`ml-4 rounded-lg p-1.5 hover:bg-opacity-20 ${
            type === 'success' ? 'hover:bg-green-200' : 'hover:bg-red-200'
          }`}
        >
          <X
            className={`w-4 h-4 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}
          />
        </button>
      </Flexbox>
    </Flexbox>
  )
}

export default Snackbar
