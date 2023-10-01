import React from 'react'
import "../includes/css/about.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import ProfilePic from '../includes/images/anmol.jpg'
import Footer from '../components/Footer';

const About = () => {


    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>

                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; About</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>About</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>

            </div>


            <div className='text-white px-4 md:p-2 md:mx-8 flex flex-col items-center justify-between'>

                <header className='absolute top-[125px] md:top-[80px] right-0 md:right-5 p-4 flex z-10 items-center justify-center '>
                    <img className="aboutImg border-2 shadow-xl rounded-full border-slate-500 z-10 w-[100px] md:w-[200px] hover:scale-105 duration-500"
                        src={ProfilePic}
                        alt=""/>
                </header>
                <div className='w-full flex flex-col justify-start items-start lg:p-4'>
                    <div className="text-pink-500 text-3xl mt-2">Hi!</div>
                    <div className="text-green-500 text-4xl">I am <span className='text-yellow-400'> Anmol!</span>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-4 text-base md:text-lg lg:text-2xl text-white '>

                    <div className="about-body lg:pl-4 py-2 md:w-[50%] text-justify flex flex-col gap-3 ">
                        <div>I am a promising third-year student at the prestigious National Institute of Technology, Sikkim, pursuing a B.Tech in Computer Science and Engineering.</div>
                        <div>Throughout my academic journey, I have demonstrated a strong aptitude for computer science concepts, consistently achieving good results in my coursework. Beyond the classroom, I have actively engaged in extracurricular activities, showcasing a well-rounded skill set that extends beyond technical expertise.</div>
                        <div>In addition to their academic pursuits, I actively sought opportunities to apply my knowledge in real-world scenarios through personal projects and collaborative initiatives. I have consistently demonstrated a proactive and hands-on approach to problem-solving.</div>

                    </div>

                    <div className=" lg:pl-4 py-2 md:w-[50%] text-justify pb-10 flex flex-col gap-3">
                        <div>As a forward-looking individual, I am not only dedicated to mastering the foundational principles of computer science but also passionate about staying abreast of the latest industry trends. </div>
                        <div>With a solid foundation in computer science, a proven track record of academic achievement, and a genuine enthusiasm for innovation, I am poised to make a significant impact in the realm of Computer Science and Engineering.</div>
                    </div>
                </div>

            </div>


            <Footer/>

        </div>
    )
}

export default About
