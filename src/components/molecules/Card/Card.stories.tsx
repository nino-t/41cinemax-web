import type { Meta, StoryObj } from '@storybook/react'
import { Star } from 'lucide-react'
import Card from './Card'
import Text from '../../atoms/Text'
import Button from '@/components/atoms/Button'
import Flexbox from '@/components/atoms/Flexbox'

const meta: Meta<typeof Card> = {
  title: 'Components/Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title of the card'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the card'
    },
    thumbnail: {
      control: 'text',
      description: 'URL of the thumbnail image'
    },
    hasMarginThumbnail: {
      control: 'boolean',
      description: 'Whether the thumbnail should have margin'
    }
  }
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: (
      <Text size="sm" color="secondary" className="mt-2">
        This is a basic card with title and subtitle.
      </Text>
    )
  }
}

export const WithThumbnail: Story = {
  args: {
    title: 'Featured Image Card',
    subtitle: 'With thumbnail image',
    thumbnail: 'https://placehold.co/400x200',
    children: (
      <Text size="sm" color="secondary" className="mt-2">
        A card showcasing an image with content below.
      </Text>
    )
  }
}

export const WithMarginThumbnail: Story = {
  args: {
    title: 'Margin Thumbnail Card',
    subtitle: 'Image with margins',
    thumbnail: 'https://placehold.co/400x200',
    hasMarginThumbnail: true,
    children: (
      <Text size="sm" color="secondary" className="mt-2">
        This card has margins around the thumbnail image.
      </Text>
    )
  }
}

export const WithAfterTitle: Story = {
  args: {
    title: 'Card with Icon',
    subtitle: 'Features an icon after the title',
    afterTitle: (
      <Star className="text-yellow-500 w-5 h-5" fill="currentColor" />
    ),
    children: (
      <Text size="sm" color="secondary" className="mt-2">
        This card demonstrates the afterTitle prop usage.
      </Text>
    )
  }
}

export const CustomTitleStyle: Story = {
  args: {
    title: 'Styled Title Card',
    titleTextProps: {
      size: 'xl',
      color: 'primary',
      weight: 'bold'
    },
    subtitle: 'With custom title styling',
    children: (
      <Text size="sm" color="secondary" className="mt-2">
        This card uses custom title text properties.
      </Text>
    )
  }
}

export const ComplexCard: Story = {
  render: () => (
    <Card
      title="Premium Package"
      titleTextProps={{
        size: 'xl',
        color: 'primary',
        weight: 'bold'
      }}
      subtitle="Special Offer"
      thumbnail="https://placehold.co/400x200"
      hasMarginThumbnail={true}
      afterTitle={
        <Flexbox align="center">
          <Star className="text-yellow-500 w-5 h-5" fill="currentColor" />
          <Text size="sm" weight="bold" color="primary" className="ml-1">
            Featured
          </Text>
        </Flexbox>
      }
    >
      <div className="space-y-4 mt-4">
        <Text size="sm" color="secondary">
          This is a complex card example with multiple features combined:
        </Text>
        <ul className="list-disc pl-6">
          <li>Custom title styling</li>
          <li>Thumbnail with margin</li>
          <li>Custom after-title element</li>
          <li>Rich content structure</li>
        </ul>
        <Button variant="primary" fullWidth>
          Learn More
        </Button>
      </div>
    </Card>
  )
}
