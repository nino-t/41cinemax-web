import React from 'react'
import { RegisterOptions } from 'react-hook-form'

export interface FormFieldProps {
  /**
   * Nama unik untuk form field.
   * Digunakan untuk identifikasi field dalam form.
   * @type {string}
   * @required
   * @example
   * <FormField name="email" /> // Untuk field email
   * <FormField name="user.address" /> // Untuk nested field
   */
  name: string

  /**
   * Label yang ditampilkan di atas form field.
   * Membantu user memahami input yang diharapkan.
   * @type {string}
   * @required
   * @example
   * <FormField
   *   name="phone"
   *   label="Nomor Telepon"
   * />
   */
  label: string

  /**
   * Komponen input yang akan digunakan dalam form field.
   * Bisa berupa Input, Select, TextArea, dll.
   * @type {React.ReactNode}
   * @required
   * @example
   * <FormField name="message" label="Pesan">
   *   <TextArea placeholder="Tulis pesan..." />
   * </FormField>
   */
  children: React.ReactNode

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan form field.
   * @type {string}
   * @example
   * <FormField
   *   className="mt-4 space-y-2"
   *   name="bio"
   *   label="Biografi"
   * />
   */
  className?: string

  /**
   * Aturan validasi dari react-hook-form.
   * Menentukan berbagai validasi untuk form field.
   * @type {RegisterOptions}
   * @example
   * <FormField
   *   name="email"
   *   label="Email"
   *   rules={{
   *     required: 'Email wajib diisi',
   *     pattern: {
   *       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
   *       message: 'Email tidak valid'
   *     }
   *   }}
   * />
   */
  rules?: RegisterOptions
}
