import { postMockRegister } from '@/__mocks__'
import Button from '@/components/atoms/Button'
import InputField from '@/components/atoms/InputField'
import Form from '@/components/molecules/Form'
import FormField from '@/components/molecules/FormField'
import InputPassword from '@/components/molecules/InputPassword'
import useSnakebarState from '@/hooks/useSnakebarState'
import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

type IRegisterBodyRequest = {
  name: string
  email: string
  phone: string
  password: string
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate()
  const { openSnakebar } = useSnakebarState()

  // Mutation untuk proses register
  const { mutate: register, isLoading } = useMutation({
    mutationFn: (bodyRequest: IRegisterBodyRequest) =>
      postMockRegister(bodyRequest)
  })

  const handleSubmit = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirm_password: _,
    ...values
  }: IRegisterBodyRequest & { confirm_password: string }) => {
    register(values, {
      onSuccess: () => {
        // Tampilkan pesan sukses dan redirect ke halaman login
        openSnakebar('Your account has been successfully created', 'success')
        navigate('/auth/login')
      },
      onError: () => {
        openSnakebar('Failed to create your account', 'error')
      }
    })
  }

  return (
    <Form className="mt-8" onSubmit={handleSubmit}>
      <FormField
        name="name"
        label="Name"
        rules={{
          required: 'Name is required'
        }}
      >
        <InputField placeholder="John Doe" />
      </FormField>
      <div className="columns-2">
        <FormField
          name="email"
          label="Email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          }}
        >
          <InputField type="email" placeholder="johndoe@gmail.com" />
        </FormField>
        <FormField
          name="phone"
          label="Phone"
          rules={{
            required: 'Phone is required',
            pattern: {
              value: /^628[0-9]{9,11}$/,
              message: 'Invalid phone number'
            }
          }}
        >
          <InputField placeholder="62811xxxxxx" />
        </FormField>
      </div>
      <FormField
        name="password"
        label="Password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        }}
      >
        <InputPassword placeholder="******" />
      </FormField>
      <FormField
        name="confirm_password"
        label="Confirm Password"
        rules={{
          required: 'Confirm Password is required',
          validate: (value: string, formValues) => {
            const { password } = formValues as { password: string }
            if (value !== password) {
              return 'Password does not match'
            }
            return true
          }
        }}
      >
        <InputPassword placeholder="******" />
      </FormField>
      <Button
        type="submit"
        variant="primary"
        className="mt-[32px]"
        loading={isLoading}
        fullWidth
      >
        Register
      </Button>
    </Form>
  )
}

export default RegisterForm
