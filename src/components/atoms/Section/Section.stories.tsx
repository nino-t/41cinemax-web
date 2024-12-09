import type { Meta, StoryObj } from '@storybook/react'
import Section from './Section'

const meta: Meta<typeof Section> = {
  title: 'Components/Atoms/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners to the section'
    }
  }
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  args: {
    children: <p className="text-gray-700">Default section content</p>
  }
}

export const Rounded: Story = {
  args: {
    children: <p className="text-gray-700">Section with rounded corners</p>,
    rounded: true
  }
}

export const WithContent: Story = {
  render: () => (
    <Section rounded>
      <h2 className="text-xl font-semibold mb-4">Section Title</h2>
      <p className="text-gray-700 mb-4">
        This is a sample section with various content elements to demonstrate
        layout and spacing.
      </p>
      <button className="bg-yellow-600 text-white px-4 py-2 rounded">
        Action Button
      </button>
    </Section>
  )
}

export const NestedSections: Story = {
  render: () => (
    <Section rounded className="space-y-4">
      <h2 className="text-xl font-semibold">Parent Section</h2>
      <Section rounded className="bg-white">
        <h3 className="text-lg font-medium mb-2">Nested Section 1</h3>
        <p className="text-gray-600">Content for nested section</p>
      </Section>
      <Section rounded className="bg-white">
        <h3 className="text-lg font-medium mb-2">Nested Section 2</h3>
        <p className="text-gray-600">Content for nested section</p>
      </Section>
    </Section>
  )
}
