import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './AuthLayout'

const meta = {
  title: 'Components/Templates/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout isStorybook={true} />}>
            <Route path="*" element={<Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof AuthLayout>

export default meta
type Story = StoryObj<typeof AuthLayout>

// Login form example
const LoginContent = () => (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold text-center">Login</h1>
    <div className="space-y-2">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
      />
      <button className="w-full p-2 bg-yellow-600 text-white rounded">
        Login
      </button>
    </div>
  </div>
)

// Default with login form
export const Default: Story = {
  render: () => <LoginContent />
}
