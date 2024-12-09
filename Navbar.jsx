import React from 'react'
import Button from './buttons/Button.jsx'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navegar = useNavigate()
  
  return (
    <div className='navbar'>
      <div className="navbar-top">
        <div className="navbar-top-prevnext">
          <img onClick={() => navegar(-1)} src={assets.arrow_left} alt="" />
          <img onClick={() => navegar(+1)} src={assets.arrow_right} alt="" />
        </div>
        <div className='navbar-top-right'>
          <Button txt='Explore Premium'/>
          <Button className='btn-light' txt='Install App'/>
          <p className='perfil'>I</p>
        </div>
      </div>

      <div className='navbar-bottom'>
        <p className='navbar-bottom-nav light'>All</p>
        <p className='navbar-bottom-nav'>Musics</p>
        <p className='navbar-bottom-nav'>Podcasts</p>
      </div>
    </div>
  )
}

export default Navbar
