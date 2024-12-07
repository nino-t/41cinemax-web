import type { Meta, StoryObj } from '@storybook/react'
import Carousel from './Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Atoms/Carousel',
  component: Carousel,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Carousel>

// Create sample slides with different colored boxes
const generateSlides = (count: number) => {
  const colors = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C']
  return Array.from({ length: count }, (_, index) => (
    <div
      style={{
        backgroundColor: colors[index % colors.length],
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#333',
        borderRadius: '8px'
      }}
    >
      Slide {index + 1}
    </div>
  ))
}

export const Default: Story = {
  args: {
    slides: generateSlides(5),
    slidesPerView: 1,
    spaceBetween: 20
  }
}

export const MultipleSlides: Story = {
  args: {
    slides: generateSlides(6),
    slidesPerView: 3,
    spaceBetween: 30
  }
}

export const CompactSlides: Story = {
  args: {
    slides: generateSlides(4),
    slidesPerView: 2,
    spaceBetween: 10
  }
}
