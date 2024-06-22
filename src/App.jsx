import { useState } from 'react'
import { Chatbot } from 'react-chatbot-kit'
import './App.css'
import config from './config'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import 'react-chatbot-kit/build/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className='App-header'>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </header>
      </div>
    </>
  )
}

export default App
