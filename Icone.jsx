import React from 'react'

const Icone = ({source, name}) => {

    return (
    <div className='icon'>
      <img className='icon-icon' src={source} alt="" />
      <p className='icon-textual'>{name}</p>
    </div>
  )
}

export default Icone
