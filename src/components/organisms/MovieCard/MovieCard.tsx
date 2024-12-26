import React from 'react'

import { Eye, Ticket } from 'lucide-react'

import Button from '@/components/atoms/Button'
import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'
import Card from '@/components/molecules/Card'
import Rating from '@/components/molecules/Rating/Rating'
import { MovieCardProps } from './MovieCard.interface'

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  thumbnail,
  releaseDate,
  genres,
  rating,
  onGetTickets,
  onSeeDetails
}) => {
  return (
    <Card
      title={title}
      afterTitle={<Rating rating={rating} />}
      titleTextProps={{ color: 'primary', onClick: () => {} }}
      thumbnail={thumbnail}
      hasMarginThumbnail={true}
      className="!bg-[#F1E8DC] rounded-none shadow-none"
    >
      <Flexbox direction="col" gap={1} className="my-4">
        <Text size="xs" color="secondary" weight="semibold">
          Release Date: {releaseDate}
        </Text>
        <Text size="xs" color="secondary" weight="semibold">
          Genre: {genres.join(', ')}
        </Text>
      </Flexbox>
      <Flexbox justify="between" gap={4}>
        <Button fullWidth>
          <Flexbox justify="center" align="center" gap={1}>
            <Ticket size={14} />
            <Text size="xs" color="white" onClick={onGetTickets}>
              Get Tickets
            </Text>
          </Flexbox>
        </Button>
        <Button variant="outline" onClick={onSeeDetails} fullWidth>
          <Flexbox justify="center" align="center" gap={1}>
            <Eye size={14} />
            <Text size="xs" color="primary">
              See Details
            </Text>
          </Flexbox>
        </Button>
      </Flexbox>
    </Card>
  )
}

export default MovieCard
