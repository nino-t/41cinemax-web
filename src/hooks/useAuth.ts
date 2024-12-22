import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'auth-storage'
    }
  )
)

export const useAuth = () => {
  const state = useAuthStore()
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    login: state.login,
    logout: state.logout
  }
}
