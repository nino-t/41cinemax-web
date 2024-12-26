import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from '@/components/organisms/MainFooter'
import MainHeader from '@/components/organisms/MainHeader'

const MainLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-cream">
      <MainHeader />
      <main className="container mx-auto py-[32px]">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  )
}

export default MainLayout
