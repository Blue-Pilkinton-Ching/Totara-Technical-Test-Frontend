import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

export interface IDashboardProps {}

export default function Dashboard(props: IDashboardProps) {
  const { user, logout } = useAuth0()

  return (
    <>
      <div className="w-full h-full">
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
    </>
  )
}
