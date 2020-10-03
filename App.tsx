import React from "react"
import {
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native"
import getUsers from "./api"

const App = () => {
  const [message, setMessage] = React.useState("")
  const [messages, setMessages] = React.useState<string[]>([])
  const [users, setUsers] = React.useState<string[]>([])
  React.useEffect(() => {
    const go = async () => setUsers(await getUsers())
    go()
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <TextInput
            testID="messageText"
            value={message}
            onChangeText={setMessage}
          />
          <Button
            testID="sendButton"
            title="Send"
            onPress={() => {
              setMessages([...messages, message])
              setMessage("")
            }}
          />
          {messages.map((message, index) => (
            <Text key={index}>{message}</Text>
          ))}
          {users.map(name => (
            <Text>{name}</Text>
          ))}
        </View>
      </SafeAreaView>
    </>
  )
}

export default App
