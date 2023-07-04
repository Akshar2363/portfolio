import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from './TsParticles';
import linkedin from '../includes/icons/linkedin.svg';
import fb from '../includes/icons/fb.svg';
import hackerrank from '../includes/icons/hackerrank.svg';
import github from '../includes/icons/github.svg';
import insta from '../includes/icons/insta.svg';
import leetcode from '../includes/icons/leetcodeColor.svg';
import whatsapp from '../includes/icons/whatsapp.svg';
import gmail from '../includes/icons/gmail.svg';
import { Link } from 'react-router-dom';
const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ2EmYnzNIN_aXziTJFfG0GHstbpUu0cSF4aZ3gBRoHeVrii-w7wizlQcceUgdA4A7/exec'

    const submitContactForm = async (e) => {

        const form = document.forms['submit-to-google-sheet']
        e.preventDefault();
        const formDetails = new FormData(form);
        form.reset();

        await fetch(scriptURL, {
            method: 'POST',
            body: formDetails
        }).then(response => console.log({success: true, response})).catch(error => console.error({success: false, error: error.message}))
    }


    return (
        <div className="relative top-[75px] md:top-0 md:left-[15%] md:w-[85%]">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Contact</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Contact</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>


            <div className="contactPage px-2 md:p-2 md:mx-8">
                <div className="contact-head-text text-white text-center text-3xl py-4 px-4 animate-pulse">Reach Out to Me!</div>

                <div className='flex text-white flex-col lg:flex-row items-center justify-between'>

                    <div className="contact-form border border-white p-2 rounded-xl w-full lg:w-[50%] ">
                        <div className="form-title m-2 p-2 text-center">
                            Lets Connect!
                        </div>
                        <hr/>
                        <form id="contactForm" className="flex flex-col my-2 items-center just0fy-center" name="submit-to-google-sheet">
                            <input className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Name" type="text" placeholder="Name"/>
                            <input className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Email" type="email" placeholder="Email"/>
                            <input className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Contact" type="number" placeholder="Contact"/>
                            <input className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Message" type="text" placeholder="Message"/>
                            <button type="submit" id="contactFormSubmit" className='z-10 border border-white w-[100px] text-wihte p-2 rounded-xl hover:bg-gray-800 '
                                onClick={submitContactForm}>Send</button>
                        </form>

                    </div>
                    <div className="contact-details w-full  lg:w-[50%] p-2 m-2 text-justify">

                        <div className="codeProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Checkout my profiles...</div>
                            <div className="codeProfiles-body flex flex-row items-center justify-around">
                                <Link className="z-10" to="https://www.hackerrank.com/anmolksharma2003"><img className=" w-[60px]" src={hackerrank} alt=""/></Link>
                                <Link className="z-10" to="https://leetcode.com/Anmol2363/"><img className=" w-[36px]" src={leetcode} alt=""/></Link>
                                <Link className="z-10" to="https://github.com/Akshar2363"><img className=" w-[48px]" src={github} alt=""/></Link>
                            </div>
                        </div>
                        <div className="socialProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Follow me on...</div>
                            <div className="socialProfiles-body flex flex-row items-center justify-around">
                                <Link className="z-10" to="https://www.linkedin.com/in/anmol-kumar-sharma-2706b4228/"><img className=" w-[60px]" src={linkedin} alt=""/></Link>
                                <Link className="z-10" to="https://www.facebook.com/Anmol2363"><img className=" w-[48px]" src={fb} alt=""/></Link>
                                <Link className="z-10" to="https://www.instagram.com/aksharma_2363/"><img className=" w-[60px]"src={insta} alt=""/></Link>
                            </div>
                        </div>

                        <div className="socialProfiles flex flex-col my-4">
                            <div className='text-2xl text-cyan-500 text-center p-2'>Contact Me...</div>
                            <div className="socialProfiles-body flex flex-row flex-wrap items-center justify-around">
                                <Link className="z-10 flex flex-row text-sm my-2  sm:text-lg" to='mailto:anmolksharma2003@gmail.com'><img className="w-[24px]" src={gmail} alt=""/> &nbsp; anmolksharma2003@gmail.com</Link>
                                <Link className="z-10 flex flex-row text-sm my-2  sm:text-lg" to='tel:+91-9771729061'><img className="w-[24px]" src={whatsapp} alt=""/> &nbsp;+91-9771729061</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact


// linkedin
// html
// css3
// js
// fb
// php
// mysql
// github
// insta
