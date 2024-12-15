import type { Meta, StoryObj } from '@storybook/react'

import YoutubePlayer from './YoutubePlayer'

const meta = {
  title: 'Components/Organisms/YoutubePlayer',
  component: YoutubePlayer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof YoutubePlayer>

export default meta
type Story = StoryObj<typeof YoutubePlayer>

// Default movie trailer
export const MovieTrailer: Story = {
  args: {
    title: 'Avatar: The Way of Water | Official Trailer',
    thumbnailURL: 'https://placehold.co/800x450/png',
    videoURL: 'https://www.youtube.com/watch?v=d9MyW72ELq0'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default movie trailer player with thumbnail preview.'
      }
    }
  }
}
