import React from 'react'
import Text from '@/components/atoms/Text'
import Section from '@/components/atoms/Section'

const UpcomingMovies: React.FC = () => {
  // Menampilkan pesan "No upcoming movies" memberikan informasi bahwa tidak ada film yang akan datang
  return (
    <Section className="text-center">
      <Text size="xl">No upcoming movies</Text>
    </Section>
  )
}

export default UpcomingMovies
