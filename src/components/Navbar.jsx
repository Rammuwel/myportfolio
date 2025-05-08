import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full  border-b border-b-gray-700 bg-gray-800 p-4'>
        <ul className='w-[80%] m-auto flex items-center gap-5 justify-center'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/resume'>Resume</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar