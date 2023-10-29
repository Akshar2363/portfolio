import React from "react";
import "../includes/css/about.css";
import blackBg1 from "../includes/images/bgBlackMd.png";
import blackBg2 from "../includes/images/bgBlackSm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TsParticles from "../components/TsParticles";
import ProfilePic from "../includes/images/anmol.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <div>
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


                <div className='w-full flex flex-col justify-start items-start lg:p-4'>
                    <div className="text-sky-300 text-3xl mt-2">Hi!</div>
                    <div className="text-slate-100 text-4xl">I am
                        <span className='text-sky-300'> Anmol!</span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row pb-0 lg:pb-10 md:gap-4 text-sm md:text-base lg:text-lg text-slate-300 '>

                    <div className="about-body p-2 lg:w-[50%] text-justify flex flex-col gap-3 ">
                        <div>I am a promising third-year student at the prestigious
                            <span className="highlight text-blue-400"> National Institute of Technology, Sikkim</span>, pursuing a B.Tech in <span className="highlight text-sky-500">Computer Science and Engineering</span> .
                        </div>

                        <div>
                        Within the classroom, I have been showcasing a strong academic record and a proactive approach to problem-solving. Apart from this, as a web developer, I bring a practical dimension to my skill set.
                        
                        </div>
                        <div>I have actively served as a contributing member in various cells of the institute, including the
                            <span className="highlight text-blue-400"> Training and Placement Cell</span>,
                            <span className="highlight text-blue-400"> Web Development Cell</span>, and
                            <span className="highlight text-blue-400"> Entrepreneurship & Innovation Cell</span>.</div>
                        <div className="text-slate-300 my-2 pb-2 text-base lg:text-xl md:text-lg">Feel free to explore a snapshot of my skills and projects ...</div>
                        <div className="flex flex-row items-center md:justify-start justify-around gap-4">

                            <div className='z-10 '>
                                <Link to="/skills" className=' flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg'>Skills</Link>
                            </div>
                            <div className='z-10'>
                                <Link to="/projects" className=' flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg'>Projects</Link>
                            </div>
                        </div>


                    </div>

                    <div className=" about-body p-2 lg:w-[50%] text-justify pb-10 lg:pb-2 flex flex-col gap-3">
                        <div>As a forward-looking individual, I am not only dedicated to mastering the foundational principles of computer science but also passionate about staying abreast of the latest industry trends.
                        </div>
                        <div className='p-4 flex z-10 items-center justify-center '>
                            <img className="aboutImg border-1 shadow-xl rounded-xl border-slate-500 z-10 w-[80%] md:w-[250px] hover:scale-105 duration-500"
                                src={ProfilePic}
                                alt=""/>
                        </div>
                        <div>With a solid foundation in computer science, a proven track record of academic achievement, and a genuine enthusiasm for innovation, I am poised to make a significant impact in the realm of <span className="highlight text-sky-500">Computer Science and Engineering</span> .</div>
                        
                    </div>
                </div>

            </div>

            <div>
              Within the classroom, I have been showcasing a strong academic
              record and a proactive approach to problem-solving. Apart from
              this, as a web developer, I bring a practical dimension to my
              skill set.
            </div>
            <div>
              I have actively served as a contributing member in various cells
              of the institute, including the
              <span className="highlight text-blue-400">
                {" "}
                Training and Placement Cell
              </span>
              ,
              <span className="highlight text-blue-400">
                {" "}
                Web Development Cell
              </span>
              , and
              <span className="highlight text-blue-400">
                {" "}
                Entrepreneurship & Innovation Cell
              </span>
              .
            </div>
            <div className="text-slate-300 my-2 pb-2 text-base lg:text-xl md:text-lg">
              Feel free to explore a snapshot of my skills and projects ...
            </div>
            <div className="flex flex-row items-center md:justify-start justify-around gap-4">
              <div className="z-10 ">
                <Link
                  to="/skills"
                  className=" flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg"
                >
                  Skills
                </Link>
              </div>
              <div className="z-10">
                <Link
                  to="/projects"
                  className=" flex items-center justify-center p-3 w-[125px] relative text-lg border border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white p-2 rounded-lg"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>

          <div className=" about-body p-2 lg:w-[50%] text-justify pb-10 lg:pb-2 flex flex-col gap-3">
            <div>
              As a forward-looking individual, I am not only dedicated to
              mastering the foundational principles of computer science but also
              passionate about staying abreast of the latest industry trends.
            </div>
            <div className="p-4 flex z-10 items-center justify-center "></div>
            <div>
              With a solid foundation in computer science, a proven track record
              of academic achievement, and a genuine enthusiasm for innovation,
              I am poised to make a significant impact in the realm of{" "}
              <span className="highlight text-sky-500">
                Computer Science and Engineering
              </span>{" "}
              .
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default About;
