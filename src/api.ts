// CRA is super outdated and dotenv doesn't work because it requires a newer version of node
// or another package or something
export default async function getRegistration(token: string) {
  return await fetch(`http://localhost:3002/api/registration`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
