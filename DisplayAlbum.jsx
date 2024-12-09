import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'


const DisplayAlbum = () => {
  const {id} = useParams()
  const album = albumsData[id]
  const { playId } = useContext(PlayerContext)
  
  return (
    <>
      <div className="album-header">
        <img src={album.image} alt="" />
        <div className="album-header-txt">
          <div className='album-header-txt-album'>
            <h2>{album.name}</h2>
            <p>{album.desc}</p>
          </div>
          <div className='album-header-txt-info'>
            <img src={assets.spotify_logo} alt="" />
            <p>Spotify</p>
            <p>1,323,154 likes</p>
            <p>50 songs</p>
            <p>2hr 20 min</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="album-list">
        <p>#</p>
        <p>Title</p>
        <p>Album</p>
        <p>Date Added</p>
        <img src={assets.clock_icon} alt="" />
      </div>
      {
        songsData.map((item, index) => (
          <div onClick={() => playId(index)} key={index}>
            <p>{index+1}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <div>{album.name}</div>
            <div>data</div>
            <p>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
