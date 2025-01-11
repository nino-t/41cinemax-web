import React from 'react'
import { Link } from 'react-router-dom'
import ImageLogo from '@/assets/41cinemax.png'

const BrandLogo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src={ImageLogo}
        alt="41Cinemax"
        width={140}
        className="cursor-pointer"
      />
    </Link>
  )
}

export default BrandLogo
