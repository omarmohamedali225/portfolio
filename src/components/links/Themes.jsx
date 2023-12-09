import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Themes() {
  const toggleTheme=()=>{
    document.body.classList.toggle('dark')
  }
  return (
    <>
      <button className='themes' onClick={toggleTheme}><FontAwesomeIcon icon={faAdjust}/></button>
    </>
  )
}
