import { useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

export function SetupCheck() {
  const { setupRequired, isLoading, setShowLoginModal } = useAuthContext()

  useEffect(() => {
    if (!isLoading && setupRequired) {
      setShowLoginModal(true)
    }
  }, [isLoading, setupRequired, setShowLoginModal])

  return null
}
