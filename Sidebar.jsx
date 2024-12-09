import React from 'react'
import Icone from './Icone'
import Card from './Card'
import { assets } from '../assets/assets'

const Sidebar = () => {
  
    return (
    <div className='sidebar'>
      <div className='header'>
        <Icone source={assets.home_icon} name="Home" />
        <Icone source={assets.search_icon} name="Search" />
      </div>
      <div className='library'>
        <div className='library-header'>
            <Icone source={assets.stack_icon} name='Your Library' />
            <div className='library-header-icons'>
                <img src={assets.arrow_icon} alt="" />
                <img src={assets.plus_icon} alt="" />
            </div>
        </div>
        
        <Card 
        className='library-card'
        titulo="Create your first playlist"
        chamada="it's easy we'll help you"
        btnTxt="Create Playlist"
        />

        <Card 
        titulo="Let's find some podcasts to follow"
        chamada="We'll keep you updated on new episodes"
        btnTxt="Browse podcasts"
        />

      </div>
    </div>
  )
}

export default Sidebar
