import React from 'react'

import { Play } from 'lucide-react'

import Flexbox from '../../atoms/Flexbox'
import { PosterProps } from './Poster.interface'

const Poster: React.FC<PosterProps> = ({ title, source, onClick }) => {
  return (
    <div className="relative">
      <img src={source} alt={title} className="w-full h-auto rounded-lg" />
      {onClick && (
        <Flexbox align="center" justify="center" className="absolute inset-0">
          <div
            className="bg-yellow-600 rounded-full p-4 cursor-pointer"
            onClick={onClick}
          >
            <Play size={32} className="text-white" />
          </div>
        </Flexbox>
      )}
    </div>
  )
}

export default Poster
