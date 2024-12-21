import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { FormProps } from './Form.interface'

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className = '',
  defaultValues = {}
}) => {
  const methods = useForm({
    defaultValues
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`w-full ${className}`}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
