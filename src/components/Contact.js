import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {


  return (
    <div className="relative top-[75px] md:top-0 md:left-[15%] md:w-[85%]">
        <div className={`flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`}>
          
          <div className="path p-10">
            <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/> &nbsp; About</p>
            <p className='text-5xl pb-3 pt-5'><strong>About</strong></p>
            <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
            <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
            <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
            <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
          </div>

        </div>
      </div>
  )
}

export default Contact