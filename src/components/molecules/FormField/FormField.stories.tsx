import type { Meta, StoryObj } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'
import FormField from './FormField'
import InputField from '@/components/atoms/InputField'

// Wrapper component untuk menyediakan FormProvider
import type { StoryContext, StoryFn } from '@storybook/react'
import Button from '@/components/atoms/Button'

const FormFieldWrapper = (Story: StoryFn, context: StoryContext) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Story {...context} />
        <Button type="submit">Validate</Button>
      </form>
    </FormProvider>
  )
}

const meta: Meta<typeof FormField> = {
  title: 'Components/Molecules/FormField',
  component: FormField,
  decorators: [FormFieldWrapper],
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Nama unik untuk form field'
    },
    label: {
      control: 'text',
      description: 'Label yang ditampilkan di atas form field'
    },
    className: {
      control: 'text',
      description: 'Class CSS tambahan menggunakan Tailwind'
    }
  }
}

export default meta
type Story = StoryObj<typeof FormField>

// Story dasar dengan text input
export const Default: Story = {
  args: {
    name: 'username',
    label: 'Username',
    children: <InputField placeholder="Masukkan username..." />
  }
}

// Story dengan validasi required
export const Required: Story = {
  args: {
    name: 'email',
    label: 'Email',
    children: <InputField type="email" placeholder="Masukkan email..." />,
    rules: {
      required: 'Email wajib diisi'
    }
  }
}

// Story dengan validasi pattern (email)
export const EmailValidation: Story = {
  args: {
    name: 'email',
    label: 'Email',
    children: <InputField type="email" placeholder="Masukkan email..." />,
    rules: {
      required: 'Email wajib diisi',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Format email tidak valid'
      }
    }
  }
}

// Story dengan validasi minimal karakter
export const MinLength: Story = {
  args: {
    name: 'password',
    label: 'Password',
    children: <InputField type="password" placeholder="Masukkan password..." />,
    rules: {
      required: 'Password wajib diisi',
      minLength: {
        value: 8,
        message: 'Password minimal 8 karakter'
      }
    }
  }
}

// Story dengan custom styling
export const CustomStyling: Story = {
  args: {
    name: 'bio',
    label: 'Biografi',
    className: 'bg-gray-50 p-4 rounded-lg shadow-sm',
    children: <InputField placeholder="Ceritakan tentang diri Anda..." />,
    rules: {
      maxLength: {
        value: 200,
        message: 'Biografi maksimal 200 karakter'
      }
    }
  }
}

// Story dengan multiple validasi
export const ComplexValidation: Story = {
  args: {
    name: 'phone',
    label: 'Nomor Telepon',
    children: <InputField type="text" placeholder="Contoh: 08123456789" />,
    rules: {
      required: 'Nomor telepon wajib diisi',
      pattern: {
        value: /^08\d{8,11}$/,
        message: 'Nomor telepon tidak valid (Format: 08xxxxxxxxxx)'
      },
      minLength: {
        value: 10,
        message: 'Nomor telepon minimal 10 digit'
      },
      maxLength: {
        value: 13,
        message: 'Nomor telepon maksimal 13 digit'
      }
    }
  }
}
