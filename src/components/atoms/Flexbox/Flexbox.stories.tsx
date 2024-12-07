import type { Meta, StoryObj } from '@storybook/react'
import Flexbox from './Flexbox'

const meta: Meta<typeof Flexbox> = {
  title: 'Components/Atoms/Flexbox',
  component: Flexbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof Flexbox>

// Helper component for demo boxes
const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-white p-4 rounded min-w-[100px] text-center"
    style={{ background: '#3498db' }}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </>
    ),
    direction: 'row',
    justify: 'start',
    align: 'start',
    wrap: 'nowrap',
    gap: 4
  }
}

export const Column: Story = {
  args: {
    children: (
      <>
        <Box>Top</Box>
        <Box>Middle</Box>
        <Box>Bottom</Box>
      </>
    ),
    direction: 'col',
    justify: 'center',
    align: 'center',
    gap: 4
  }
}

export const Wrapped: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Box key={num}>Item {num}</Box>
        ))}
      </>
    ),
    wrap: 'wrap',
    gap: 4
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    )
  ]
}

export const SpaceBetween: Story = {
  args: {
    children: (
      <>
        <Box>Left</Box>
        <Box>Center</Box>
        <Box>Right</Box>
      </>
    ),
    justify: 'between',
    align: 'center',
    gap: 4
  }
}

export const CenteredContent: Story = {
  args: {
    children: <Box>Centered Content</Box>,
    justify: 'center',
    align: 'center',
    className: 'h-[200px] border border-gray-200 rounded'
  }
}

export const ResponsiveGrid: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Box key={num}>Grid Item {num}</Box>
        ))}
      </>
    ),
    wrap: 'wrap',
    justify: 'evenly',
    gap: 8
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Story />
      </div>
    )
  ]
}
