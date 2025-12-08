import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchAuthStatus, login, register, logout } from '../services/api'
import type { LoginRequest, RegisterRequest } from '../types/api'

export function useAuth() {
  return useQuery({
    queryKey: ['auth'],
    queryFn: fetchAuthStatus,
    staleTime: 60000, // 1 minute
  })
}

export function useLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (credentials: LoginRequest) => login(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })
}

export function useRegister() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })
}

export function useLogout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })
}
