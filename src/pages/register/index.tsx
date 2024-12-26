import React from 'react'
import { useNavigate } from 'react-router-dom'
import Text from '@/components/atoms/Text'
import TextAnchor from '@/components/molecules/TextAnchor'
import RegisterForm from './components/RegisterForm'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Text as="h1" size="2xl" weight="bold" className="mb-1">
        Register
      </Text>
      <Text>Hi, Welcome to the Registration Form</Text>
      <RegisterForm />
      <Text className="text-center mt-6">
        Already have an account?{' '}
        <TextAnchor onClick={() => navigate('/login')}>Log in</TextAnchor>
      </Text>
    </>
  )
}

export default RegisterPage
