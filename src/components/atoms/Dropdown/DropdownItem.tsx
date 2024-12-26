import React from 'react'

import { DropdownItemProps } from './Dropdown.interface'

const DropdownItem: React.FC<DropdownItemProps> = ({
  onClick,
  icon,
  children,
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'text-gray-700',
    danger: 'text-red-700'
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  )
}

export default DropdownItem
