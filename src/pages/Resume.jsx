import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/image (5).png'
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbBrandLeetcode } from "react-icons/tb";

function Resume() {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  

  return (
    <div className='w-full min-h-screen'>
      <div className='p-5 mx-auto max-w-5xl flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row min-h-56  items-center space-x-4'>
          <div className='w-40 h-40 rounded-full overflow-hidden border border-gray-700'>
            <img src={profile} alt="Ram" className='w-full' />
          </div>
          <div>
            <h1 className="text-3xl font-bold p-1 border-b  border-b-gray-700 ">Hi, I'm <span className='inline-block animate-wave'>Shriram Muwel 👋</span></h1>
            <p className="text-gray-300">Explore my professional background, technical skills, education, and real-world experience</p>
          </div>

        </div>
        <div className='flex items-center gap-3 border-b-2  border-b-gray-700'>
          <h1 className='text-3xl font-bold p-2'>MyResume</h1>
         
           <button onClick={() => reactToPrintFn()} className='by-2 px-4 border rounded-full cursor-pointer'>Get Resume</button>
        
        </div>

       {/* resume mian section */}
        <div ref={contentRef}  className='w-full flex flex-col gap-1  bg-gray-950  p-5 text-gray-200 print-section'>
          <div className='flex flex-col items-center justify-center mt-1 gap-1'>
            <h1 className='text-4xl  font-bold'>Shriram Muwel</h1>
            <p className='border-b border-b-gray-700 font-sm'>Indore, Madhya Pradesh, India</p>
            <ul className='flex flex-wrap items-center justify-center gap-2 font-sm'>
              <li><Link to={'tel:+918770699454'} className='flex items-center gap-1'><MdPermPhoneMsg/>+91 8770699454</Link></li>
              <li><Link to={'mailto:shrirammuwel02017@gmail.com'} className='flex items-center gap-1'><CgMail/>shrirammuwel02017@gmail.com</Link></li>
              <li><Link to={'https://github.com/Rammuwel'} className='flex items-center gap-1'><FaGithub/>Github</Link></li>
              <li><Link to={'https://leetcode.com/u/mOKdEIQaxO/'} className='flex items-center gap-1'><TbBrandLeetcode/>Leetcode</Link></li>
              <li><Link to={'https://www.linkedin.com/in/shriram-muwel-7318311bb/'} className='flex items-center gap-1'><FaLinkedin/>LinkedIn</Link></li>
              <li><Link to={'https://myportfolio-liart-eight.vercel.app/'} className='flex items-center gap-1'><CgProfile/>Portfolio</Link></li>
            </ul>
          </div>
          <div className=''>
            <h1 className=' border-b-2 py-1 border-b-gray-400  text-lg font-bold'>Educational Background</h1>
            <div className='flex flex-col  gap-1'>
              <div className='flex items-center justify-between border-b border-b-gray-300 pb-1'>
                <div className='flex flex-col gap-1 pt-2'>
                  <h2 className='text-md font-semibold'>Shri Govindram Seksaria Institute of Technology and Science (SGSITS) </h2>
                  <p className='text-gray-400'>B.Tech. in Computer Science and Engineering; CGPA: 6.0</p>
                </div>
                <div className='flex flex-col gap-1 pt-2 text-end'>
                  <p className='text-gray-400'>2018 – 2023</p>
                  <p className='text-gray-400'>Indore, India</p>
                </div>
              </div>

              <div className='flex items-center justify-between border-b border-b-gray-300 pb-1'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-md font-semibold'>Govt. Higher Secondary School </h2>
                  <p className='text-gray-400'>12th - MP Board; Percentage: 72.4%</p>
                </div>
                <div className='flex flex-col gap-1 text-end'>
                  <p className='text-gray-400'>2017 – 2018</p>
                  <p className='text-gray-400'>Dhar (bakaner), India</p>
                </div>
              </div>

              <div className='flex items-center justify-between border-b border-b-gray-300 pb-1'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-md font-semibold'>Govt. Higher Secondary School </h2>
                  <p className='text-gray-400'>10th - MP Board; Percentage: 79.9%</p>
                </div>
                <div className='flex flex-col gap-1 text-end'>
                  <p className='text-gray-400'>2015 – 2016</p>
                  <p className='text-gray-400'>Dhar (bakaner), India</p>
                </div>
              </div>


            </div>
          </div>
          <div className=''>
            <h1 className=' border-b-2 py-1 border-b-gray-400 text-lg font-bold'>Skills</h1>
            <div className='pl-5'>
              <ul className=' list-disc flex items-center flex-wrap gap-x-10'>
                <li>JavaScript</li>
                <li>DSA</li>
                <li>React</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Express</li>
                <li>Git</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>PHP/Laravel</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>

          <div className=''>
            <h1 className=' border-b-2 py-1 border-b-gray-400  text-lg font-bold'>Internship and training</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1 '>
                  <h2 className='text-md font-semibold'>FODUU (Foundation of Design Uprising Unit) pvt. </h2>
                  <ul className='text-gray-400 list-disc pl-5'>
                     <li>Worked as a backend developer using PHP Laravel framework.</li>
                     <li>Gained experience in JavaScript,  Bootstrap, HTML/CSS, and PHP.</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-1 text-end'>
                  <p className='text-gray-400'>Jan 2023 – Apr 2023</p>
                  <p className='text-gray-400'>Indore, India</p>
                </div>
              </div>

              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-md font-semibold'>AICTE IOT Internship</h2>
                  <ul className='text-gray-400 list-disc pl-5'>
                     <li>Worked on an Arduino robotic arm project with smartphone controls.</li>
                     <li>Learned to use 3D printing and laser machines for project components</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-1 pt-1 text-end'>
                  <p className='text-gray-400'>Jun 2022 – Jul 2022</p>
                  <p className='text-gray-400'>Indore, India</p>
                </div>
              </div>

              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1 pt-1'>
                  <h2 className='text-md font-semibold'>DDUGKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana) (Training) </h2>
                  <ul className='text-gray-400 list-disc pl-5'>
                    <li>Gained hands-on experience with MongoDB, Express.js, React, Node.js and Python</li>
                 </ul>
                </div>
                <div className='flex flex-col gap-1 pt-1 items-end'>
                  <p className='text-gray-400'>Jul 2024 – Apr 2025</p>
                  <p className='text-gray-400'>Indore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <h1 className=' border-b-2 py-1 border-b-gray-400 text-lg font-bold'>Projects</h1>
            <div className='flex flex-col  gap-3'>
              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1 pt-1'>
                  <h2 className='text-md font-semibold'><a href="https://github.com/Rammuwel/LMS">Learning Management System (LMS)</a> </h2>
                  <ul className='text-gray-400 list-disc pl-5'>
                     <li>Developed an Learning Management System (LMS) using the MERN stack (clirk, stripe, cloudinary).</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-1 pt-1 text-end'>
                  <p className='text-gray-400'>2025</p>
                  <p className='text-gray-400'></p>
                </div>
              </div>

              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1 pt-1'>
                  <h2 className='text-md font-semibold'><a href="https://github.com/Rammuwel/LinkedIn-clone">LinkedIn Clone</a></h2>
                  <ul className='text-gray-400 list-disc pl-5'>
                     <li>Developed a LinkedIn Clone using MERN stack and Socket.io with real-time messaging, notifications, post sharing, and user authentication.</li>
                    
                  </ul>
                </div>
                <div className='flex flex-col gap-1 pt-1 text-end'>
                  <p className='text-gray-400'>2025</p>
               
                </div>
              </div>

              <div className='flex items-center justify-between pb-1 border-b border-b-gray-300'>
                <div className='flex flex-col gap-1 pt-1'>
                  <h2 className='text-md font-semibold'><a href="https://github.com/Rammuwel/prescripto">Prescripto (Doctor Appointment System)</a> </h2>
                  <p className='text-gray-400'>A complete appointment booking system for doctors and patients with real-time scheduling, secure payments via Razorpay, and image/document upload using Cloudinary. </p>
                </div>
                <div className='flex flex-col gap-1 pt-1'>
                  <p className='text-gray-400'>2025</p>
                 
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <h1 className=' border-b-2 py-1 border-b-gray-400  text-lg font-bold'>Certification Courses</h1>
            <div className='pl-5'>
              <ul className=' list-disc flex items-center flex-wrap gap-x-10 mt-1 text-[10px] text-gray-400'>
                <li><Link>Design and Analysis of Algorithms - NPTEL-IITK</Link></li>
                <li><Link>Cloud Computing - NPTEL-IITK</Link></li>
                <li><Link>Software Testing - NPTEL-IITK</Link></li>
                <li><Link>Data Mining - NPTEL-IITK</Link></li>
                <li><Link> Soft Computing - NPTEL-ITK</Link></li>
                <li><Link>Python - Kaggle</Link></li>
              </ul>
            </div>
          </div>
        </div>
         <div>
           <button onClick={() => reactToPrintFn()} className='by-2 px-4 border rounded-full cursor-pointer'>Get Resume</button>
         </div>
      </div>
    </div>
  )
}

export default Resume