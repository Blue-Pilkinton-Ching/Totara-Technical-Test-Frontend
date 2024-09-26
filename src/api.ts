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
  //prints expected result
  console.log(JSON.stringify(regi))

  return await fetch(`http://localhost:3002/api/registration`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(regi),
  })
}
