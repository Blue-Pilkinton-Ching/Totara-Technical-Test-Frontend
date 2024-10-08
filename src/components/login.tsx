import { useAuth0 } from '@auth0/auth0-react'
import { Button, CircularProgress } from '@mui/material'
import Backdrop from './backdrop'

function Login() {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0()

  if (isAuthenticated) {
    window.location.href = '/dashboard'
  }

  return (
    <>
      <div className="App">
        <main className="h-svh w-full flex items-center justify-center font-lato ">
          {isLoading || isAuthenticated ? (
            <CircularProgress className="mx-auto" />
          ) : error ? (
            <>
              <h1 className="text-3xl">An Error occurred!</h1>
              <h2 className="text-lg">{error.message}</h2>
            </>
          ) : (
            <>
              <Backdrop>
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
              </Backdrop>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default Login
