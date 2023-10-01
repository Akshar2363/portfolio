import React from 'react'
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import CLang from '../includes/images/C.png'
import CppLang from '../includes/images/c++.png'
import JavaLang from '../includes/images/java.png'
import Python from '../includes/images/python.png'
import php from '../includes/images/php.png'
import reactjs from '../includes/images/reactjs.png'
import nodejs from '../includes/images/nodejs.png'
import mysql from '../includes/images/mysql.png'
import html from '../includes/images/html.png'
import css from '../includes/images/css.png'
import js from '../includes/images/js.png'
import mongodb from '../includes/images/mongodb.png'
import linux from '../includes/images/linux.png'
import vscode from '../includes/images/vscode.png'
import github from '../includes/images/github.png'
import git from '../includes/images/git.png'
import bootstrap from '../includes/images/bootstrap.png'
import tailwind from '../includes/images/tailwind.png'
import "../includes/css/skills.css"
import CircularProgressLogo from '../components/CircularProgressLogo';
import Footer from '../components/Footer';

const Skills = () => {

    return (
        <div className="w-full mt-[80px] ml-0 md:ml-[200px] md:mt-0">
            <TsParticles/>
            <div className={
                `z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Skills</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Skills</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>
            
            <div className={`skills`}>

                <div className="skills-title text-center w-full text-xl md:text-4xl text-white p-4">Have a look at what I have learnt...</div>

                <div className="skills gap-4  p-3 text-white flex flex-col items-center justify-around text-center">
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Technical Skills</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'C'}
                                logo={CLang}
                                percentage={80}/>
                            <CircularProgressLogo text={'C++'}
                                logo={CppLang}
                                percentage={75}/>
                            <CircularProgressLogo text={'Java'}
                                logo={JavaLang}
                                percentage={65}/>
                            <CircularProgressLogo text={'Python'}
                                logo={Python}
                                percentage={50}/>

                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Web Development</div>
                        <div className="skills-section-body flex flex-col lg:flex-row items-center justify-center w-full gap-3 ">
                            <div className='flex flex-row items-center justify-around w-full gap-3 '>
                                <CircularProgressLogo text={'HTML'}
                                    logo={html}
                                    percentage={85}/>
                                <CircularProgressLogo text={'CSS'}
                                    logo={css}
                                    percentage={90}/>
                                <CircularProgressLogo text={'ReactJS'}
                                    logo={reactjs}
                                    percentage={75}/>
                            </div>
                            <div className='flex flex-row items-center justify-around w-full gap-3'>
                                <CircularProgressLogo text={'NodeJS'}
                                    logo={nodejs}
                                    percentage={65}/>
                                <CircularProgressLogo text={'PHP'}
                                    logo={php}
                                    percentage={70}/>
                                <CircularProgressLogo text={'JavaScript'}
                                    logo={js}
                                    percentage={75}/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%]">
                        <div className="skills-section-title text-lg md:text-3xl">Tools</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'VS Code'}
                                logo={vscode}
                                percentage={95}/>
                            <CircularProgressLogo text={'Git'}
                                logo={git}
                                percentage={75}/>
                            <CircularProgressLogo text={'GitHub'}
                                logo={github}
                                percentage={75}/>
                            <CircularProgressLogo text={'Linux'}
                                logo={linux}
                                percentage={60}/>
                        </div>
                    </div>
                    <div className="skills-section gap-4 flex flex-col w-full lg:w-[80%] pb-10">
                        <div className="skills-section-title text-lg md:text-3xl">Databases & Frameworks</div>
                        <div className="skills-section-body flex flex-row items-center justify-around w-full gap-3">
                            <CircularProgressLogo text={'MySQL'}
                                logo={mysql}
                                percentage={65}/>
                            <CircularProgressLogo text={'MongoDB'}
                                logo={mongodb}
                                percentage={55}/>
                            <CircularProgressLogo text={'Bootstrap'}
                                logo={bootstrap}
                                percentage={85}/>
                            <CircularProgressLogo text={'Tailwind CSS'}
                                logo={tailwind}
                                percentage={95}/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Skills
