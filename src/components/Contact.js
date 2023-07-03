import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from './TsParticles';
const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ2EmYnzNIN_aXziTJFfG0GHstbpUu0cSF4aZ3gBRoHeVrii-w7wizlQcceUgdA4A7/exec'
    const form = document.forms['submit-to-google-sheet']


    const submitContactForm = async (e) => {
        
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


            <div className="contactPage px-4 md:p-2 md:mx-8">
                <div className="contact-head-text text-white text-center text-3xl py-4 animate-pulse">Reach Out to Me!</div>

                <div className='flex text-white flex-col-reverse lg:flex-row items-center justify-between'>

                    <div className="contact-form border border-white p-2 rounded-xl w-full lg:w-[50%] ">
                        <div className="form-title m-2 p-2 text-center">
                            Lets Connect!
                        </div>
                        <hr/>
                        <form id="contactForm" className="flex flex-col my-2 items-center just0fy-center" name="submit-to-google-sheet">
                            <input className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Name" type="text" placeholder="Name"/>
                            <input  className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Email" type="email" placeholder="Email"/>
                            <input  className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Contact" type="number" placeholder="Contact"/>
                            <input  className='z-10 text-black m-2 w-full p-2 bg-gray-400 placeholder-gray-800 rounded-xl hover:bg-gray-300 ' name="Message" type="text" placeholder="Message"/>
                            <button type="submit" id="contactFormSubmit" className='z-10 border border-white w-[100px] text-wihte p-2 rounded-xl hover:bg-gray-800 '
                                onClick={submitContactForm}>Send</button>
                        </form>
                    </div>
                    <div className="contact-details w-full lg:w-[50%] p-2 m-2 text-justify">
                        Lorem ipt nemo, natus quas alias atque fugiat tempora laborum dolor corrupti. Ipsam quis explicabo ipsa ullam rem, laborum quasi suscipit in voluptatibus iure aliquam esse harum dolor, quas aliquid error quia eum architecto asperiores ratione. Assumenda vitae adipisci natus. Neque excepturi eaque ea nostrum placeat dolores qui natus, molestiae molestias sunt soluta numquam cupiditate facere doloribus suscipit quos vitae a et cumque consequatur ullam! Amet, nihil laboriosam quas beatae, ipsum repellat voluptas eveniet iusto labore, ullam blanditiis quasi.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
