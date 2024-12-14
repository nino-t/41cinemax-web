import React, { useMemo } from 'react'

import { InputFieldProps } from './InputField.interface'

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, placeholder = '.....', error = false, ...props }, ref) => {
    const elementClassname = useMemo(() => {
      const baseClasses =
        'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm'

      const inputClasses = error
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
        : 'border-gray-300 focus:ring-yellow-600 focus:border-yellow-600'

      return `${baseClasses} ${inputClasses} ${className}`.trim()
    }, [className, error])

    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={elementClassname}
        {...props}
      />
    )
  }
)

export default InputField
