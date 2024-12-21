import { create } from 'zustand'

interface SnakebarState {
  open: boolean
  message: string
  severity: 'success' | 'error'
  openSnakebar: (message: string, severity: 'success' | 'error') => void
  closeSnakebar: () => void
}

const useSnakebarState = create<SnakebarState>((set) => ({
  open: false,
  message: '',
  severity: 'success' as 'success' | 'error',
  openSnakebar: (message: string, severity: 'success' | 'error') => {
    set({ open: true, message, severity })
  },
  closeSnakebar: () => {
    set({ open: false })
  }
}))

export default useSnakebarState
