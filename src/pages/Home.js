import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import Typewriter from "typewriter-effect"
import Footer from '../components/Footer'
import TsParticles from '../components/TsParticles'
import Resume from '../documents/Resume_Anmol_Kumar_Sharma.pdf'
import { Link } from 'react-router-dom'
const Home = () => {

  return (

    <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
      <TsParticles />
      <div className={`z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`}>

        <div className="path p-10">
          {/* <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/> &nbsp; About</p> */}
          <p className='text-5xl pb-3'><strong>Home</strong></p>
          <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
        </div>

      </div>
      <div className='z-10 text-white px-4 md:p-2 md:mx-8 flex flex-col lg:flex-row items-center justify-between'>

        <div className="programming-img w-full lg:w-[50%] p-4 mb-8 md:m-0 flex flex-col items-start justify-center h-fit">
          <div className='text-md lg:text-2xl text-xl inline-flex'><span className='text-rose-400'>Hey There!</span><div className='text-3xl wave h-fit w-fit'>👋</div></div>
          <h2 className='text-md lg:text-2xl text-xl'><span className='text-green-300'>This is, </span></h2>
          <h2 className='text-md text-green-700 lg:text-7xl text-5xl'><span className='text-yellow-500'>Anmol </span> <span className='text-yellow-700'>Sharma</span></h2>
          <h2 className='text-md text-blue-400 lg:text-2xl text-xl'>I am a 3<sup>rd</sup>-year student at NIT Sikkim</h2>
          <h2 className='text-md text-green-400 lg:text-xl text-lg'>I am a web developer with good programming skills, and I am seeking internship opportunities...</h2>
        </div>

        <div className="z-10 typingText m-2 p-5 border  h-[250px] sm:h-[200px] w-[100%] lg:w-[50%] md:h-[200px] lg:h-[250px] text-left md:text-md lg:text-xl rounded-xl shadow-xl " style={{background:'rgba(128, 128, 128, 0.312)'}}>

          <Typewriter
            options={{
              loop: false,
              cursor: "_",
            }}

            onInit={(typewriter) => {

              const stringArr = [
                `<span class="text-violet-500">#include<span/> <span class="text-orange-500"> &#60; iostream &#62; <br/>`,
                `<span class="text-violet-500">using<span/> <span class="text-blue-500">namespace<span/> <span class="text-green-500">std<span/>; <br/><br/>`,
                `<span class="text-violet-500">int<span/> <span class="text-yellow-300">main<span/> <span class="text-yellow-600">() {<span/><br/>`,
                `&emsp;<span class="text-blue-500">cout<span/><span class="text-orange-500"><<"Welcome! This is my Portfolio!"&#60;&#60; <span/> <span class="text-yellow-600">endl;<span/><br/>`,
                `<span class="text-violet-500"> &emsp;return <span/><span class="text-yellow-300">0<span/>;<br/>`,
                `<span class="text-yellow-600">}<span/>`,
              ]

              for (let str of stringArr) {
                typewriter.start()
                  .typeString(str)
                  .pauseFor(1000)
              }

            }}
          />


        </div>
        

      </div>
      <div className="pl-4 md:pl-8 pb-12 ">
        <div className="text-rose-500 my-2 lg:text-2xl text-lg">Know More About Me! </div>
        <div className="text-blue-500 my-2 pb-2 lg:text-2xl text-lg">Have a look at my <span className='text-orange-500'>Resume...</span> </div>
        <div className='z-10'><Link to={Resume} target="_blank" className=' relative text-xl border border-green-700 text-green-700 hover:bg-green-700 hover:text-green-400 p-2 rounded-xl'>Resume</Link></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home