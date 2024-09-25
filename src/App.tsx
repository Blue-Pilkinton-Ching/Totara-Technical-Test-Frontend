import { useState } from 'react'
import SignIn from './components/sign-in'
import { LoginState } from './types'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/de'

function App() {
  const [signInState, setSignInState] = useState<LoginState>('login')

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        children={
          <div className="App">
            <main className="h-svh w-full flex items-center justify-center font-lato ">
              <SignIn setLoginState={setSignInState} loginState={signInState} />
            </main>
          </div>
        }
      />
    </>
  )
}

export default App
