import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/login'
import reportWebVitals from './reportWebVitals'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-nz'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Auth0Provider
        domain="dev-6k5h6ojs067v2f8l.au.auth0.com"
        clientId="zz45ahIjv4o1pAUd94n1QR5dgpKn8NW7"
        authorizationParams={{
          audience: 'https://totara-test.com/',
          redirect_uri: `http://localhost:3000/dashboard`,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </LocalizationProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
