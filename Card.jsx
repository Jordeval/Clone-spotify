import React from 'react'
import Button from './buttons/Button'

const Card = ({titulo, chamada, btnTxt}) => {
  return (
    <div className='library-card'>
      <h2>{titulo}</h2>
      <p>{chamada}</p>
      <Button txt={btnTxt}/>
    </div>
  )
}

export default Card
