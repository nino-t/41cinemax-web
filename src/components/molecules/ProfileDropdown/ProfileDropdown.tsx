import React from 'react'

import { List, LogOut, User } from 'lucide-react'

import Dropdown from '../../atoms/Dropdown'
import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { ProfileDropdownProps } from './ProfileDropdown.interface'

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  avatarUrl = '/avatar-404.png',
  username,
  onLogout,
  onProfileClick,
  onTransactionHistoryClick
}) => {
  return (
    <Dropdown
      items={[
        {
          icon: <User className="w-4 h-4" />,
          children: 'Profile',
          onClick: onProfileClick
        },
        {
          icon: <List className="w-4 h-4" />,
          children: 'Transaction History',
          onClick: onTransactionHistoryClick,
          divider: true
        },
        {
          variant: 'danger',
          icon: <LogOut className="w-4 h-4" />,
          children: 'Logout',
          onClick: onLogout
        }
      ]}
    >
      <Flexbox align="center">
        <Text className="mr-2">{username}</Text>
        <img
          src={avatarUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-200"
        />
      </Flexbox>
    </Dropdown>
  )
}

export default ProfileDropdown
