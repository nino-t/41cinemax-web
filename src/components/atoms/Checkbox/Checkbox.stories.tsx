import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Checkbox>

// Basic checkbox
export const Basic: Story = {
  args: {
    label: 'Accept terms and conditions'
  }
}

// Multiple checkboxes group example
const CheckboxGroupComponent = () => {
  const [selected, setSelected] = React.useState({
    option1: false,
    option2: false,
    option3: false
  })

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelected((prev) => ({
        ...prev,
        [name]: e.target.checked
      }))
    }

  return (
    <div className="space-y-2">
      <Checkbox
        label="Option 1"
        checked={selected.option1}
        onChange={handleChange('option1')}
      />
      <Checkbox
        label="Option 2"
        checked={selected.option2}
        onChange={handleChange('option2')}
      />
      <Checkbox
        label="Option 3"
        checked={selected.option3}
        onChange={handleChange('option3')}
      />
    </div>
  )
}

export const CheckboxGroup: Story = {
  render: () => <CheckboxGroupComponent />
}
