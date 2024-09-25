import { useState } from 'react'
import SignIn from './components/sign-in'
import { LoginState } from './types'

function App() {
  const [signInState, setSignInState] = useState<LoginState>('login')

  return (
    <div className="App">
      <main className="h-svh w-full flex items-center justify-center font-lato ">
        <SignIn setLoginState={setSignInState} loginState={signInState} />
      </main>
    </div>
  )
}

export default App
