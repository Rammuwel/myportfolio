import React from 'react'
import profile from '../assets/portfolio-img.png'
import { projects, skills } from '../assets/data.js'
import { Link } from 'react-router-dom'
import { useState } from "react";


const categories = ["All", "React", "HTML", "PHP", "Python"];

function Portfolio() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  const handleCategories = (cat) => {
    setSelectedCategory(cat);
  
    if (cat === "All") {
      setFilteredProjects(projects);
    } else  {
      setFilteredProjects(projects.filter((item) =>
        item.technologies.includes(cat)
      ));
    }
  };

 
  return (
    <div className='w-full min-h-screen '>
      <div className='p-5 mx-auto max-w-5xl flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row min-h-56  items-center space-x-4'>
          <div className='w-40 h-40 rounded-full overflow-hidden border border-gray-700'>
            <img src={profile} alt="Ram" className='w-full' />
          </div>
          <div>
            <h1 className="text-3xl font-bold p-1 border-b  border-b-gray-700 "> Things I've Built</h1>
            <p className="text-gray-300"> A showcase of projects where I turned ideas into interactive experiences.</p>
          </div>
        </div>
        
        <div className="">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <div className="flex gap-4 mb-6 flex-wrap items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategories(cat)}
            className={`px-4 py-2 rounded-full transition-all cursor-pointer 
              ${selectedCategory === cat 
                ? "bg-gray-700 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div key={index} className="p-4  border border-x-gray-700 hover:border-y-gray-700 hover:border-x-white  duration-[500ms] rounded-xl shadow hover:shadow-lg transition-all">
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

export default Portfolio