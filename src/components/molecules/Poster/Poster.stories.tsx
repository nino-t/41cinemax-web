import type { Meta, StoryObj } from '@storybook/react'
import Poster from './Poster'

const meta: Meta<typeof Poster> = {
  title: 'Components/Molecules/Poster',
  component: Poster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Judul film yang ditampilkan'
    },
    source: {
      control: 'text',
      description: 'URL gambar poster film'
    },
    onClick: {
      description: 'Function yang dipanggil saat poster diklik'
    }
  }
}

export default meta
type Story = StoryObj<typeof Poster>

// Story untuk poster dasar tanpa interaksi
export const Default: Story = {
  args: {
    title: 'The Super Mario Bros. Movie',
    source: 'https://placehold.co/300x450/png'
  }
}

// Story untuk poster dengan interaksi klik
export const Clickable: Story = {
  args: {
    title: 'Guardians of the Galaxy Vol. 3',
    source: 'https://placehold.co/300x450/png',
    onClick: () => {
      console.log('Poster clicked')
      alert('Navigating to movie details...')
    }
  }
}

// Story untuk poster dengan aspect ratio berbeda
export const WideFormat: Story = {
  args: {
    title: 'Dune: Part Two',
    source: 'https://placehold.co/400x300/png'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    )
  ]
}

// Story untuk poster dalam grid layout
export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Poster
        title="Oppenheimer"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Oppenheimer clicked')}
      />
      <Poster
        title="Barbie"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Barbie clicked')}
      />
      <Poster
        title="Mission: Impossible"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Mission Impossible clicked')}
      />
    </div>
  )
}

// Story untuk poster dalam carousel layout
export const CarouselLayout: Story = {
  render: () => (
    <div className="flex space-x-4 overflow-x-auto p-4">
      <Poster
        title="Spider-Man"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Spider-Man clicked')}
      />
      <Poster
        title="The Marvels"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('The Marvels clicked')}
      />
      <Poster
        title="Blue Beetle"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Blue Beetle clicked')}
      />
      <Poster
        title="Aquaman"
        source="https://placehold.co/200x300/png"
        onClick={() => console.log('Aquaman clicked')}
      />
    </div>
  )
}

// Story untuk poster dengan loading state fallback
export const WithFallback: Story = {
  args: {
    title: 'Movie with Invalid Image',
    source: 'invalid-image-url.jpg'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Menampilkan bagaimana komponen menangani gambar yang gagal dimuat'
      }
    }
  }
}
