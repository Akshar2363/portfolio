import React from 'react'
import "../includes/css/projects.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TsParticles from '../components/TsParticles';
import ProjectCard from "../components/ProjectsCard"
import Footer from '../components/Footer';
import todoList1 from '../includes/images/todolistImg1.png'
import todoListLogo from '../includes/images/todolistLogo.png'
import udgam1 from '../includes/images/udgamImg1.png'
import udgamLogo from '../includes/images/udgamLogo.png'
const Projects = () => {

 
    const projects = {
        project1:{
            id:1,
            title:"To-Do List",
            subtitle:"Task Manager",
            image:todoList1,
            desc: {
                line1:"Built a to-do list website using LAMP stack, with backend validation for user login and signup.",
                line2:"Includes functionalities such as add, delete, edit, sort, and filter tasks."
            },
            techStack:[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
                "Bootstrap"
            ],
            hostLink:"https://todolist-2363.000webhostapp.com/",
            githubLink:"https://github.com/Akshar2363/To-Do-List",
            logo:todoListLogo
        },
        project2:{
            id:2,
            title:"Udgam '23 Website",
            subtitle:"Cultural Fest Website",
            image:udgam1,
            desc: {
                line1:"Designed and developed the website for Udgam '23, the cultural fest at NIT Sikkim",
            },
            techStack:[
                "HTML",
                "CSS",
                "JavaScript",
                "Taiwind CSS"
            ],
            hostLink:"https://udgam.nitsikkim.ac.in/udgam23/",
            logo:udgamLogo
        }
    }

  return (
    <div className="relative top-[75px] md:top-0 md:left-[15%] md:w-[85%]">
            <TsParticles/>

            <div className={
                `z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`
            }>
                <div className="path p-10">
                    <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight}/>
                        &nbsp; Projects</p>
                    <p className='text-5xl pb-3 pt-5'>
                        <strong>Projects</strong>
                    </p>
                    <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                    <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
                </div>
            </div>


            <div className={`projects p-4 pb-10`}>
                <div className={`projects-title text-center items-center justify-center w-full text-xl md:text-4xl text-white p-4`}>Here are my projects...</div>
                <div className="project-cards flex flex-col gap-3 p-0 md:pl-5 lg:p-0">
                    <div className={`flex flex-col lg:flex-row gap-3 items-around justify-center`}>
                        <ProjectCard project={projects.project1} />
                        <ProjectCard project={projects.project2} />
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Projects


