import React, { useEffect, useRef } from 'react'

import { DropdownProps } from './Dropdown.interface'
import DropdownItem from './DropdownItem'

export const DropdownDivider: React.FC = () => (
  <div className="border-t border-gray-100 my-1" />
)

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  className = ''
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeDropdown = () => setIsOpen(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {children}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownItem
                onClick={() => {
                  item?.onClick?.()
                  closeDropdown()
                }}
                icon={item.icon}
                variant={item.variant}
              >
                {item.children}
              </DropdownItem>
              {item.divider && <DropdownDivider />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
