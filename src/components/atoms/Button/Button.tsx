import React from 'react'
import { Loader2 } from 'lucide-react'
import { ButtonProps } from './Button.interface'

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  rounded = false,
  disabled = false,
  className = '',
  icon,
  loading = false,
  ...props
}) => {
  const baseClasses = `flex justify-center py-2 px-4 border border-transparent ${
    rounded ? 'rounded-full' : 'rounded-md'
  } shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`

  const variantClasses = {
    primary:
      'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    secondary:
      'text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500',
    outline:
      'text-yellow-600 bg-white border-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500',
    text: 'text-yellow-600 bg-transparent border-transparent'
  }

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    icon ? 'flex items-center justify-center gap-2' : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin h-5 w-5 mr-2" />
          Loading...
        </div>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  )
}

export default Button
