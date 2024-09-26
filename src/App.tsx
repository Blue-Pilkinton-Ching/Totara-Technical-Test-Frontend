import { useAuth0 } from '@auth0/auth0-react'
import { Button, CircularProgress } from '@mui/material'

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout, error } =
    useAuth0()

  return (
    <>
      <div className="App">
        <main className="h-svh w-full flex items-center justify-center font-lato ">
          <div className="rounded-2xl shadow-lg p-7 sm:p-10 bg-gray-100 w-[min(400px,100vw)] gap-4 flex-col flex flex-center">
            {isLoading ? (
              <CircularProgress className="mx-auto" />
            ) : isAuthenticated ? (
              <>
                <h1 className="text-3xl">You're Logged In!</h1>
                <br />
                <div className="flex flex-row items-center gap-5">
                  <img
                    className="w-12 rounded"
                    src={user?.picture}
                    alt={user?.name}
                  />
                  <h2 className="flex-1 text-center pb-2 text-lg text-ellipsis max-w-full overflow-clip min-w-0">
                    {user?.name}
                  </h2>
                  <h3>{user?.birthdate}</h3>
                </div>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </Button>
              </>
            ) : error ? (
              <>
                <h1 className="text-3xl">An Error occurred!</h1>
                <h2 className="text-lg">{error.message}</h2>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
