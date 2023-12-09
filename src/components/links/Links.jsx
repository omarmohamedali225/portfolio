import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

export default function Links() {
  const location = useLocation().pathname
  return (
    <>
      <ul className='menu-links'>
        <Link to="/" className={location=='/'?"active":""}><li><FontAwesomeIcon icon={faHome}/></li></Link>
        <Link to="about" className={location=='/about'?"active":""}><li><FontAwesomeIcon icon={faUser}/></li></Link>
        <Link to="portfolio" className={location=='/portfolio'?"active":""}><li><FontAwesomeIcon icon={faBriefcase}/></li></Link>
        <Link to="contact" className={location=='/contact'?"active":""}><li><FontAwesomeIcon icon={faEnvelope}/></li></Link>
      </ul>
    </>
  )
}
