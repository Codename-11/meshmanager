import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'
import Layout from './components/Layout/Layout'
import { LoginModal } from './components/Auth'
import { SetupCheck } from './components/Auth/SetupCheck'

function App() {
  return (
    <AuthProvider>
      <SetupCheck />
      <LoginModal />
      <DataProvider>
        <Layout />
      </DataProvider>
    </AuthProvider>
  )
}

export default App
