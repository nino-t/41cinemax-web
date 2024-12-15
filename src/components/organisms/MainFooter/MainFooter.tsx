import React from 'react'

import { Facebook, Instagram, Twitter } from 'lucide-react'

import BrandLogo from '../../atoms/BrandLogo/BrandLogo'
import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'

interface FooterProps {
  className?: string
}

const MainFooter: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full py-[40px] bg-[#FEF9F3] mt-6 ${className}`}>
      <div className="container mx-auto px-4">
        <BrandLogo />
        <div className="mt-[60px] mb-[16px] border border-yellow-600" />
        <Flexbox align="center" justify="between">
          <Text>© 41CINEMAX Development</Text>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter size={20} />
            </a>
          </div>
        </Flexbox>
      </div>
    </footer>
  )
}

export default MainFooter
