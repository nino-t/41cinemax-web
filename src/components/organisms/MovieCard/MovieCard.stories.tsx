import type { Meta, StoryObj } from '@storybook/react'
import MovieCard from './MovieCard'

const meta: Meta<typeof MovieCard> = {
  title: 'Components/Organisms/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    title: 'Inception',
    thumbnail: 'https://placehold.co/250x150',
    releaseDate: '2020-07-16',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 4.8,
    onGetTickets: () => console.log('Get Tickets clicked'),
    onSeeDetails: () => console.log('See Details clicked')
  }
}

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title:
      'Spider-Man: Across the Spider-Verse Part One - The Beginning of the Multiverse Saga'
  }
}

export const LowRating: Story = {
  args: {
    ...Default.args,
    rating: 2.5
  }
}

export const ManyGenres: Story = {
  args: {
    ...Default.args,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Sci-Fi', 'Thriller']
  }
}
