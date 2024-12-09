import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {
  
  const navegar = useNavigate()

  return (
    <div onClick={() => navegar(`/album/${id}`)} className='albuns-album'>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default AlbumItem
