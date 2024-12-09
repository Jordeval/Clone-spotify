import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import DisplaySong from './DisplaySong'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef()
  const localizacao = useLocation()
  const isAlbum = localizacao.pathname.includes('album')
  const albumId = isAlbum ? localizacao.pathname.slice(-1) : null
  const bgColor = albumsData[Number(albumId)].bgColor
  
  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }else{
      displayRef.current.style.background = '#121212'
    }
  })
  
  return (
    <div ref={displayRef} className='main'>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<DisplayHome />}/>
        <Route path='/album/:id' element={<DisplayAlbum />}/>
        <Route path='/song/:id' element={<DisplaySong />}/>
      </Routes>
    </div>
  )
}

export default Display
