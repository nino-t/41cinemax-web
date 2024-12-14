import React, { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'

import { InputPasswordProps } from './InputPassword.interface'
import InputField from '@/components/atoms/InputField'
import Flexbox from '@/components/atoms/Flexbox'

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ placeholder = '.....', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className="mt-1 relative">
        <InputField
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          {...props}
        />
        <Flexbox
          align="center"
          className="absolute inset-y-0 right-0 pr-3 cursor-pointer"
        >
          {showPassword ? (
            <EyeOff
              className="h-5 w-5 text-gray-400"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="h-5 w-5 text-gray-400"
              onClick={() => setShowPassword(true)}
            />
          )}
        </Flexbox>
      </div>
    )
  }
)

export default InputPassword
