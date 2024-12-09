import React from 'react'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <div className='container-album'>
      <div className="albuns">
        <h2>Featured charts</h2>
        <div className='albuns-list'>
            {albumsData.map( (item, index) => (
                <AlbumItem key={index} image={item.image}
                name={item.name} desc={item.desc} id={item.id}/>))}
        </div>
      </div>
      <div className="songs">
        <h2>Today's biggest hits</h2>
        <div className='songs-list'>
          {songsData.map( (item, index) => (
                  <SongItem key={index} image={item.image}
                  name={item.name} desc={item.desc} id={item.id}/>))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
