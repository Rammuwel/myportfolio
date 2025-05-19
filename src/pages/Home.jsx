import React from 'react'
import profile from '../assets/image (5).png'
import { projects, skills } from '../assets/data.js'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='w-full min-h-screen'>
            <div className='p-5 mx-auto max-w-5xl flex flex-col gap-5'>
                <div className='flex flex-col md:flex-row min-h-56  items-center space-x-4'>
                    <div className='w-40 h-40 rounded-full overflow-hidden border border-gray-700'>
                        <img src={profile} alt="Ram" className='w-full' />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold p-1 border-b  border-b-gray-700 ">Hi, I'm <span className='inline-block animate-wave'>Shriram Muwel 👋</span></h1>
                        <p className="text-gray-300">MERN Stack Developer | Problem Solver | Tech Enthusiast</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold p-2 border-b-2  border-b-gray-700'>Skills</h1>
                    <div className='flex items-center gap-5 mt-5 flex-wrap'>
                        {
                            skills.map((skill, i) => (
                                <div key={i} className='flex items-center text-[16px] px-5 py-2 bg-gray-700 rounded-full gap-1 border border-x-gray-700 hover:border-y-gray-700 hover:border-x-white cursor-grab transition-[border] duration-[500ms] '>
                                    <img src={skill.icon} alt="" className='w-[20px] h-[20px] rounded-full border border-gray-700' /> <span> {skill.title} </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=''>
                    <h1 className='border-b-2 py-1 border-b-gray-600 text-lg md:text-3xl font-bold'>About Me</h1>
                    <div className='flex flex-col md:flex-row items-start gap-5 mt-3'>

                        {/* Left Side - Image */}
                        <div className='w-full  md:w-1/3 flex justify-center'>
                            <div className='overflow-hidden border-4 border-gray-700'>
                                <img src={profile} alt="Shriram Muwel" className='w-full h-full object-cover' />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className='w-full md:w-2/3 text-gray-400 leading-relaxed'>
                            <p>
                            I'm Shriram Muwel, a passionate and skilled MERN Stack Developer from Indore, Madhya Pradesh. With a strong foundation in Computer Science, I graduated from SGSITS, Indore, where I completed my B.Tech in CSE. Over the years, I've developed a deep interest in full-stack development, combining creativity with technical expertise to build scalable web applications.
                            </p>
                            <p className='mt-2'>
                            I specialize in JavaScript, React, Node.js, Express, and MongoDB, and also hold proficiency in C/C++, Java, Python, MySQL, and PHP/Laravel. My development journey includes impactful internships—such as working on IoT systems and backend development with PHP Laravel—and training programs like DDUGKY, where I gained hands-on experience in modern web technologies.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-3xl font-bold p-2 border-b-2  border-b-gray-700'>Projects</h1>
                    <div className="grid mt-5 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.slice(0, 3).map((project, index) => (
                            <div key={index} className="p-4 border border-x-gray-700 hover:border-y-gray-700 hover:border-x-white  duration-[500ms] rounded-xl shadow hover:shadow-lg transition-all">
                                <img src={project.image} alt={project.title} className="rounded mb-3" />
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 text-xs text-white">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-500 px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                                <div className="mt-3 flex gap-3 text-sm">
                                    <a href={project.link} target="_blank" className="text-blue-600 hover:underline">Live</a>
                                    <a href={project.gitLink} target="_blank" className="text-gray-600 hover:underline">GitHub</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home