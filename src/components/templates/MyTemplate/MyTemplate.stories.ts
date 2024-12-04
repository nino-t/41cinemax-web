import type { Meta, StoryObj } from '@storybook/react'
import MyTemplate from './MyTemplate'

const meta = {
  title: 'Components/Templates/MyTemplate',
  component: MyTemplate,
  tags: ['autodocs']
} satisfies Meta<typeof MyTemplate>

export default meta
type Story = StoryObj<typeof MyTemplate>

export const Default: Story = {
  args: {
    pageTitle: 'My Template Page',
    sections: [
      {
        title: 'Section 1',
        buttonVariant: 'primary',
        items: [
          {
            title: 'Item 1',
            description: 'Description 1',
            backgroundColor: 'clauds'
          },
          {
            title: 'Item 2',
            description: 'Description 2',
            backgroundColor: 'city-lights'
          }
        ]
      }
    ]
  }
}
