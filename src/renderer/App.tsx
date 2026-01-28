import React from 'react'
import Header from './components/Header'
import ChatContainer from './components/ChatContainer'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatContainer />
    </div>
  )
}

export default App
