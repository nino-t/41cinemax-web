import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Text from '../../atoms/Text'
import { BreadcrumbProps } from './Breadcrumb.interface'

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
  separator = '/'
}) => {
  const location = useLocation()

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${className}`}>
      <ol className="flex flex-wrap items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isActive = item.to === location.pathname

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center"
              aria-current={isLast ? 'page' : undefined}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className={`group transition-colors duration-200 ${
                    isActive ? 'pointer-events-none' : ''
                  }`}
                >
                  <Text
                    as="span"
                    color={isLast || isActive ? 'default' : 'secondary'}
                    className={`group-hover:text-yellow-700 ${
                      !isLast && !isActive && 'group-hover:underline'
                    }`}
                  >
                    {item.label}
                  </Text>
                </Link>
              ) : (
                <Text color={isLast ? 'default' : 'secondary'}>
                  {item.label}
                </Text>
              )}

              {!isLast && (
                <Text
                  as="span"
                  color="secondary"
                  className="mx-2"
                  aria-hidden="true"
                >
                  {separator}
                </Text>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
