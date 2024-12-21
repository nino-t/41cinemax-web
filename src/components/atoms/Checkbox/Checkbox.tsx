import React, { useMemo } from 'react'

import { CheckboxProps } from './Checkbox.interface'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', error, ...props }, ref) => {
    const elementClassname = useMemo(() => {
      const baseClasses =
        'h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'

      const inputClasses = error
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
        : 'border-gray-300 focus:ring-yellow-600 focus:border-yellow-600'

      return `${baseClasses} ${inputClasses} ${className}`.trim()
    }, [className, error])

    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className={elementClassname}
          {...props}
        />
        {label && (
          <span className="ml-2 block text-sm text-gray-900">{label}</span>
        )}
      </label>
    )
  }
)

export default Checkbox
