import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import programComp from '../includes/images/programming.png'
import Typewriter from "typewriter-effect"
import Footer from './Footer'
import TsParticles from './TsParticles'

const Home = () => {


  

  return (
    
    <div className="relative top-[75px] md:top-0 md:left-[15%] md:w-[85%]">
        <TsParticles/>
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
      <div  className='z-10 text-white px-4 md:p-2 md:mx-8 flex flex-col md:flex-row items-center justify-center'>
      <section id="homescreen" class="m-0 justify-end text-gray-100 "></section>



        <div className="z-10 typingText m-2 p-2 border  h-[200px] sm:h-[175px] w-[100%] md:h-[275px] lg:h-[225px] text-left md:text-md lg:text-xl ">
          
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
        <div className="programming-img w-full md:w-[50%] p-4 mb-8 md:m-0 flex items-center justify-center ">
          <img src={programComp} className="z-10 md:w-[250px] hover:scale-105 duration-300 " alt="" />
        </div>
          
      </div>
      <Footer />
    </div>
  )
}

export default Home