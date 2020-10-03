import env from "react-native-config"

const endpoint = env.ENDPOINT

const getUsers = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`,
  )
  const json = await response.json()
  return json.map(user => user.title)
}

export default getUsers
