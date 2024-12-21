import { TextProps } from '../../atoms/Text/Text.interface'

export interface TextAnchorProps extends TextProps {
  /**
   * Fungsi yang akan dipanggil ketika link diklik
   * @type {() => void}
   * @returns {void}
   * @example
   * onClick={() => console.log('Link diklik')}
   */
  onClick: () => void
}
