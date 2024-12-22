import { postMockLogin } from '@/__mocks__'
import Button from '@/components/atoms/Button'
import Checkbox from '@/components/atoms/Checkbox'
import Flexbox from '@/components/atoms/Flexbox'
import InputField from '@/components/atoms/InputField'
import TextAnchor from '@/components/molecules/TextAnchor'
import Form from '@/components/molecules/Form'
import FormField from '@/components/molecules/FormField'
import InputPassword from '@/components/molecules/InputPassword'
import useSnakebarState from '@/hooks/useSnakebarState'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

type FormValues = {
  email: string
  password: string
  remember_me: boolean
}

export const LoginPage = () => {
  const navigate = useNavigate()
  const { login: authLogin } = useAuth()
  const { openSnakebar } = useSnakebarState()

  // Mutation untuk proses login
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      postMockLogin(data.email, data.password)
  })

  const handleSubmit = (values: FormValues) => {
    login(values, {
      onSuccess: ({ data: { id, name, email } }) => {
        openSnakebar('Successfully logged in to your account', 'success')

        // Simpan informasi login user & redirect ke halaman home
        authLogin({
          id,
          name,
          email
        })
        navigate('/')
      },
      onError: () => {
        openSnakebar(
          'Failed to login, please check your email and password',
          'error'
        )
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <FormField
        name="email"
        label="Email"
        rules={{
          required: 'Email is required!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address'
          }
        }}
      >
        <InputField type="email" placeholder="johndoe@gmail.com" />
      </FormField>
      <FormField
        name="password"
        label="Password"
        rules={{
          required: 'Password is required!',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        }}
      >
        <InputPassword placeholder="Enter your password" />
      </FormField>
      <Flexbox align="center" justify="between">
        <FormField name="remember_me">
          <Checkbox label="Remember Me" />
        </FormField>
        <TextAnchor onClick={() => navigate('/auth/forget-password')}>
          Forgot Password?
        </TextAnchor>
      </Flexbox>
      <Button type="submit" variant="primary" loading={isLoading} fullWidth>
        Login
      </Button>
    </Form>
  )
}
