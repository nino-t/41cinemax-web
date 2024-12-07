import React from 'react'

import ImageLogo from '@/assets/41cinemax.png'

const BrandLogo: React.FC = () => {
  return (
    <a href="/">
      <img
        src={ImageLogo}
        alt="41Cinemax"
        width={140}
        className="cursor-pointer"
      />
    </a>
  )
}

export default BrandLogo
