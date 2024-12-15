import React from 'react'

import BrandLogo from '../../atoms/BrandLogo/BrandLogo'

const AuthHeader: React.FC = () => {
  return (
    <header className="py-[20px] border-b">
      <div className="container mx-auto">
        <BrandLogo />
      </div>
    </header>
  )
}

export default AuthHeader
