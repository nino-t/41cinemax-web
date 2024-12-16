import React from 'react'
import { Outlet } from 'react-router-dom'

import AuthHeader from '../../organisms/AuthHeader'

const AuthLayout: React.FC<{
  isStorybook?: boolean
}> = ({ isStorybook = false }) => {
  return (
    <div
      className={`${isStorybook ? '' : 'w-screen h-screen'} overflow-hidden bg-pearl`}
    >
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
