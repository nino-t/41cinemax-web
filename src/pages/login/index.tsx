import React from 'react'
import { useNavigate } from 'react-router-dom'
import Text from '@/components/atoms/Text'
import TextAnchor from '@/components/molecules/TextAnchor'
import LoginForm from './components/LoginForm'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Text as="h1" size="2xl" weight="bold" className="mb-1">
        Login
      </Text>
      <Text>Hi, Please Log in</Text>
      <LoginForm />
      <Text className="text-center mt-6">
        Not registered yet?{' '}
        <TextAnchor onClick={() => navigate('/register')}>
          Create an account
        </TextAnchor>
      </Text>
    </>
  )
}

export default LoginPage
