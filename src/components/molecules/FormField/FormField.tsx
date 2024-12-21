import React from 'react'
import { useFormContext } from 'react-hook-form'

import Text from '../../atoms/Text'
import { FormFieldProps } from './FormField.interface'

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  children,
  className = '',
  rules
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<{ [key: string]: string | number | boolean }>()

  const error = errors[name]

  return (
    <div className={`mb-4 ${className}`}>
      {!!label && (
        <Text as="label" weight="medium" className="mb-1 block">
          {label}
        </Text>
      )}
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          ...(children.props || {}),
          id: name,
          ...register(name, rules),
          error: !!error
        })}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message as string}</p>
      )}
    </div>
  )
}

export default FormField
