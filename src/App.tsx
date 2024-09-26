import { useAuth0 } from '@auth0/auth0-react'
import { Button, CircularProgress } from '@mui/material'
import Dashboard from './components/dashboard'

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0()

  return (
    <>
      <div className="App">
        <main className="h-svh w-full flex items-center justify-center font-lato ">
          {isLoading ? (
            <CircularProgress className="mx-auto" />
          ) : isAuthenticated ? (
            <Dashboard />
          ) : error ? (
            <>
              <h1 className="text-3xl">An Error occurred!</h1>
              <h2 className="text-lg">{error.message}</h2>
            </>
          ) : (
            <>
              <div className="rounded-2xl shadow-lg p-7 sm:p-10 bg-gray-100 w-[min(400px,100vw)] gap-4 flex-col flex flex-center">
                <h1 className="text-3xl">You're Logged Out!</h1>
                <br />
                <Button
                  onClick={() => loginWithRedirect()}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Log In
                </Button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default App
