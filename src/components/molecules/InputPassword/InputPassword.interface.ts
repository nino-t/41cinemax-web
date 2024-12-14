import { InputFieldProps } from '@/components/atoms/InputField/InputField.interface'

/**
 * Props untuk komponen Input Password.
 * Mewarisi semua props dari InputField dengan beberapa fungsionalitas tambahan:
 * - Toggle show/hide password
 * - Styling khusus untuk input type password
 * - Validasi format password
 *
 * @extends {InputFieldProps}
 * @example
 * <InputPassword
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 *   placeholder="Masukkan password..."
 * />
 */
export type InputPasswordProps = InputFieldProps
