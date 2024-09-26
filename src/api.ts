// CRA is super outdated and dotenv doesn't work because it requires a newer version of node

import { IRegistration } from './schema'

// or another package or something
export async function getRegistration(token: string) {
  return await fetch(`http://localhost:3002/api/registration`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export async function addRegistration(regi: IRegistration, token: string) {
  return await fetch(`http://localhost:3002/api/registration`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
