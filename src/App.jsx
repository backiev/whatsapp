// import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Chat } from './components/Chat'


export const  App = () => {

  return (
    <>
      <div className='max-w-7xl mx-auto flex h-screen'>
        <Sidebar />
        <Chat />
      </div>
    </>
  )
}

export default App
