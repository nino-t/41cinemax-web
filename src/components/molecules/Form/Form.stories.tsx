import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from './Form'
import FormField from '../FormField'
import InputField from '@/components/atoms/InputField'
import Button from '@/components/atoms/Button'
import Checkbox from '@/components/atoms/Checkbox'

const meta: Meta<typeof Form> = {
  title: 'Components/Molecules/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof Form>

// Story dasar dengan input email
export const Basic: Story = {
  args: {
    onSubmit: action('form-submitted'),
    defaultValues: {
      email: ''
    }
  },
  render: (args) => (
    <Form {...args}>
      <div className="space-y-4">
        <FormField name="email" label="Email">
          <InputField type="email" placeholder="Enter your email" />
        </FormField>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

// Story dengan multiple fields dan default values
export const WithDefaultValues: Story = {
  args: {
    onSubmit: action('form-submitted'),
    defaultValues: {
      name: 'John Doe',
      email: 'john@example.com',
      message: ''
    }
  },
  render: (args) => (
    <Form {...args}>
      <div className="space-y-4">
        <FormField name="name" label="Name">
          <InputField type="text" placeholder="Enter your name" />
        </FormField>
        <FormField name="email" label="Email">
          <InputField type="email" placeholder="Enter your email" />
        </FormField>
        <FormField name="message" label="Message">
          <InputField type="text" placeholder="Enter your message" />
        </FormField>
        <Button type="submit">Send Message</Button>
      </div>
    </Form>
  )
}

// Story dengan custom styling
export const CustomStyling: Story = {
  args: {
    onSubmit: action('form-submitted'),
    defaultValues: {
      email: '',
      subscribe: false
    }
  },
  render: (args) => (
    <Form {...args}>
      <div className="space-y-4">
        <FormField name="email" label="Newsletter Signup">
          <InputField type="email" placeholder="Enter your email" />
        </FormField>
        <FormField name="subscribe" label="Subscribe to newsletter">
          <Checkbox />
        </FormField>
        <Button type="submit">Subscribe</Button>
      </div>
    </Form>
  )
}
