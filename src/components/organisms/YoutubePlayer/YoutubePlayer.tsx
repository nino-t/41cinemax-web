import React, { useState } from 'react'

import Poster from '../../molecules/Poster'
import { YoutubePlayerProps } from './YoutubePlayer.interface'

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  title,
  thumbnailURL,
  videoURL
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = videoURL?.split('v=')?.[1]

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        className="w-full h-full min-h-[414px] rounded-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }

  return (
    <Poster
      title={title}
      source={thumbnailURL}
      onClick={() => setIsPlaying(true)}
    />
  )
}

export default YoutubePlayer
