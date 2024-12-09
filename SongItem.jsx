import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image, name, desc, id}) => {
  
  const { playId } = useContext(PlayerContext)

  const navegar = useNavigate()

  return (
    <div onClick={() => {
      navegar(`/song/${id}`)
      playId(id)
    }} className='songs-song'>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default SongItem
