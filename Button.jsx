import React from 'react'
import styles from './Button.module.css'

const Button = ({txt}) => {
  
  const corFundoBtn = 'blue'

  return (
    <>
        <button className={styles['btn-max']} style={{ '--bg-color': corFundoBtn }}>{txt}</button>
    </>
  )
}

export default Button
