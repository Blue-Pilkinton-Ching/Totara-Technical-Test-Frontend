import { Button, Link, TextField } from '@mui/material'
import { LoginState } from '../types'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import dayjs from 'dayjs'

interface ISignInProps {
  loginState: LoginState
  setLoginState: (state: LoginState) => void
}

export default function SignIn(props: ISignInProps) {
  const [dob, setDob] = useState<dayjs.Dayjs | null>(null)

  return (
    <>
      <h1 className="text-3xl">
        {props.loginState === 'login' ? 'Sign in' : 'Register'}
      </h1>
      <TextField
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      {props.loginState === 'register' && (
        <TextField
          required
          id="outlined-basic"
          label="Repeat password"
          variant="outlined"
          type="password"
        />
      )}
      {props.loginState === 'register' && (
        <>
          <br />
          <TextField
            required
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <DatePicker
            value={dob}
            onChange={(newValue) => setDob(newValue)}
            label="Date of birth"
          />
        </>
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
    </>
  )
}
