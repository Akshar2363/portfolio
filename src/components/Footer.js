import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as LeetCodeLogo} from '../includes/icons/leetCodeSVG.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
        
    <div className="footer z-40 fixed right-0 bottom-0 text-white my-2 flex flex-row items-center justify-end w-full md:w-[85%]">
        
        <button disabled className='bg-white rounded-xl mr-2 w-[75%] h-[2px]'></button>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.hackerrank.com/anmolksharma2003?hr_r=1"><FontAwesomeIcon icon={faHackerrank}/></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://github.com/Akshar2363"><FontAwesomeIcon icon={faGithub} /></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.linkedin.com/in/anmol-kumar-sharma-2706b4228/"><FontAwesomeIcon icon={faLinkedin} /></Link></div>
        <div className='text-xl md:text-2xl pl-3 md:pl-5'><Link to="https://leetcode.com/Anmol2363/"><LeetCodeLogo/></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.facebook.com/Anmol2363/"><FontAwesomeIcon icon={faFacebook} /></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.instagram.com/aksharma_2363/"><FontAwesomeIcon icon={faInstagram} /></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="mailto:anmolksharma2003@gmail.com.com"><FontAwesomeIcon icon={faEnvelope} /></Link></div>
        <div className='text-md md:text-lg pl-3 md:pl-5 pr-3'><Link to="tel:+919771729061"><FontAwesomeIcon icon={faPhone} /></Link></div>
        <button disabled className='bg-white rounded-xl mr-2 w-[25%] h-[2px]'></button>
    </div>
  )
}

export default Footer