import { useAuth0 } from '@auth0/auth0-react'
import { Button, CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import getRegistration from '../api'

export interface IDashboardProps {}

export default function Dashboard(props: IDashboardProps) {
  const { user, logout, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  if (!isLoading && !isAuthenticated) {
    window.location.href = '/'
  }

  useEffect(() => {
    getRegistrationLocal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getRegistrationLocal() {
    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: 'https://totara-test.com/',
      },
    })
    console.log('Token:', token)
    const regi = await getRegistration(token)
    console.log(regi)
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-svh flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="w-full h-full bg-gray-100">
          <div className="w-full flex flex-row items-center gap-5 p-3 justify-between">
            <div className="flex flex-row gap-5 items-center flex-1 min-w-0">
              <img
                className="w-12 rounded flex-shrink-0"
                src={user?.picture}
                alt={user?.name}
              />
              <h2 className="text-lg truncate">{user?.name}</h2>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="w-[100px] flex-shrink-0"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log Out
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
