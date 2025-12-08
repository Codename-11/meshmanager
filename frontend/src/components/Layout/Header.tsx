import { useAuthContext } from '../../contexts/AuthContext'

export default function Header() {
  const { isAuthenticated, user, logout, setShowLoginModal } = useAuthContext()

  return (
    <header className="header">
      <h1>MeshManager</h1>
      <div className="header-actions">
        {isAuthenticated ? (
          <>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              {user?.display_name || user?.username || user?.email}
              {user?.is_admin && <span className="badge badge-success" style={{ marginLeft: '0.5rem' }}>Admin</span>}
            </span>
            <button className="btn btn-ghost" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={() => setShowLoginModal(true)}>
            Login
          </button>
        )}
      </div>
    </header>
  )
}
