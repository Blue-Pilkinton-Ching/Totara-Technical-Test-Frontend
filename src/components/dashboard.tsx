import { useAuth0 } from '@auth0/auth0-react'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { getRegistration, addRegistration } from '../api'
import Backdrop from './backdrop'
import { IRegistration } from '../schema'

export interface IDashboardProps {}

export default function Dashboard(props: IDashboardProps) {
  const [register, setRegister] = useState<IRegistration | null>(null)
  const [loading, setIsLoading] = useState(true)
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
    const regi = await getRegistration(token)
    const json = await regi.json()
    setRegister(json)
    setIsLoading(false)
  }

  async function addRegistrationLocal(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(event)

    const target = event.target as typeof event.target & {
      0: HTMLInputElement
      2: HTMLInputElement
      4: HTMLInputElement
    }
    const registration = {
      first_name: target[0].value,
      last_name: target[2].value,
      food: target[4].value,
    } as IRegistration

    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: 'https://totara-test.com/',
      },
    })
    await addRegistration(registration, token)
    setIsLoading(true)
    getRegistrationLocal()
  }

  return (
    <>
      {isLoading || loading ? (
        <div className="w-full h-svh flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-svh">
          <div className="bg-gray-100 w-full flex flex-row items-center gap-5 p-3 justify-between">
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
          <div className="w-full flex-1 flex items-center justify-center">
            {register ? (
              <div>
                <h1>You have registered</h1>
                <h2>
                  <strong>First Name:</strong> {register.first_name}
                </h2>
                <h2>
                  <strong>Last Name:</strong> {register.last_name}
                </h2>
                <h2>
                  <strong>Food:</strong> {register.food}
                </h2>
              </div>
            ) : (
              <>
                <Backdrop>
                  <h1 className="text-3xl">You need to Register</h1>
                  <span></span>
                  <form
                    className="*:w-full flex flex-col gap-3"
                    onSubmit={addRegistrationLocal}
                  >
                    <TextField
                      type="outlined-helperText"
                      label="Enter your first name"
                      required
                    />
                    <TextField
                      type="outlined-helperText"
                      label="Enter your last name"
                      required
                    />
                    <TextField
                      type="outlined-helperText"
                      label="Enter your favourite food"
                      required
                    />
                    <span></span>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </form>
                </Backdrop>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
