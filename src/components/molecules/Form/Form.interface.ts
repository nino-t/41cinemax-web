/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FormProps {
  /**
   * Fungsi yang akan dipanggil ketika form di-submit
   * @param {any} values - Nilai-nilai dari form yang di-submit
   * @returns {void}
   * @example
   * const handleSubmit = (values) => {
   *   console.log('Form values:', values);
   * };
   */
  onSubmit: (values: any) => void

  /**
   * Komponen child yang akan ditampilkan di dalam form
   * @type {React.ReactNode}
   * @example
   * <Form>
   *   <Input name="email" />
   *   <Button type="submit">Kirim</Button>
   * </Form>
   */
  children: React.ReactNode

  /**
   * Class CSS tambahan untuk styling form
   * @type {string}
   * @default ""
   * @example
   * className="flex flex-col gap-4 p-6 bg-white rounded-lg"
   */
  className?: string

  /**
   * Nilai default untuk field-field dalam form
   * @type {Record<string, any>}
   * @default {}
   * @example
   * const defaultValues = {
   *   email: 'user@example.com',
   *   name: 'John Doe',
   *   age: 25
   * };
   */
  defaultValues?: Record<string, any>
}
