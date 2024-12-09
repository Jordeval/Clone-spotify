import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <> 
      <div className='container'>
        <Sidebar />
        <Display />
      </div>
      <Player />
    </> 
  )
}

export default App
