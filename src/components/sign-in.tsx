import { Button, Link, TextField } from '@mui/material'
import { LoginState } from '../types'

interface ISignInProps {
  loginState: LoginState
  setLoginState: (state: LoginState) => void
}

export default function SignIn(props: ISignInProps) {
  return (
    <div className="rounded-2xl shadow-lg p-12 bg-gray-100 w-[min(400px,100vw)] gap-4 flex-col flex flex-center">
      <h1 className="text-3xl">
        {props.loginState === 'login' ? 'Sign in' : 'Register'}
      </h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      {props.loginState === 'register' && (
        <TextField
          id="outlined-basic"
          label="Repeat password"
          variant="outlined"
          type="password"
        />
      )}
      <Button variant="contained">
        {props.loginState === 'login' ? 'Log in' : 'Register'}
      </Button>
      <h2 className="text-center">
        {props.loginState === 'login'
          ? `Don't have an
        account? `
          : `Already have an
        account? `}
        <Link
          className="hover:cursor-pointer"
          onClick={() => {
            props.setLoginState(
              props.loginState === 'login' ? 'register' : 'login'
            )
          }}
        >
          {props.loginState === 'login' ? `Register ` : `Sign in `}
        </Link>
      </h2>
    </div>
  )
}
