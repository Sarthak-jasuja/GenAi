import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuroraText } from './ui/aurora-text'
const Navbar = () => {
  return (
    <div className='flex justify-between p-4 shadow-md'>
      <div>
        <img src="src/assets/logo.png" alt="Logo" className='h-10 w-10' />
      </div>
      <div>
        <ul className='hidden md:flex items-start gap-10 font-medium'>
          <NavLink to='/'>
            <li className='py-1 hover:scale-105 transition-all duration-300'>Home</li>
            <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden ' />
          </NavLink>
          <NavLink to='/about-us'>
            <li className='py-1 hover:scale-105 transition-all duration-300'>About us</li>
            <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact-us'>
            <li className='py-1 hover:scale-105 transition-all duration-300'>Contact us</li>
            <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden' />
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
