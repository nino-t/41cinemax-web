import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import useSnakebarState from '@/hooks/useSnakebarState'
import Flexbox from '@/components/atoms/Flexbox'
import SearchBox from '@/components/molecules/SearchBox'
import BrandLogo from '@/components/atoms/BrandLogo/BrandLogo'
import ProfileDropdown from '@/components/molecules/ProfileDropdown'
import TextAnchor from '@/components/molecules/TextAnchor'

const MainHeader: React.FC = () => {
  const navigate = useNavigate()
  const { openSnakebar } = useSnakebarState()
  const { isAuthenticated, user: profile, logout } = useAuth()

  const authLogout = () => {
    logout()
    navigate('/login')
    openSnakebar('Logout success', 'success')
  }

  return (
    <header className="py-[16px] border-b shadow bg-pearl">
      <div className="container mx-auto">
        <Flexbox align="center" justify="between">
          <BrandLogo />
          <SearchBox />
          {isAuthenticated && profile ? (
            <ProfileDropdown
              username={profile.name}
              onProfileClick={() => {}}
              onTransactionHistoryClick={() => {}}
              onLogout={authLogout}
            />
          ) : (
            <div className="flex gap-6">
              <TextAnchor onClick={() => navigate('/register')}>
                Register
              </TextAnchor>
              <TextAnchor onClick={() => navigate('/login')}>Login</TextAnchor>
            </div>
          )}
        </Flexbox>
      </div>
    </header>
  )
}

export default MainHeader
