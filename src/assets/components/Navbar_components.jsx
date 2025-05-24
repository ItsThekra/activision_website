import React from 'react'
import '/src/App'
import { Link } from 'react-router'

function Navbar_components() {
  return (
      <nav className=' fixed bg-[#00000153] flex h-15 items-center nav-bar gap-5 border-b border-amber-50 z-40'>
        <div className='flex nav-bar justify-evenly items-center'>
         
    <div className="md:hidden">
      <div className="cursor-pointer">
        <div className="w-6 h-1 bg-white mb-1 "></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>
    </div>

           <img src="/images/activision_logo_white-text.png" 
        alt="This is logo" 
        className='w-30 h-7' />

        <ul className="gap-6 text-white hidden md:flex" >
          <Link to="#"><li>Games</li></Link>
          <Link to="/About_page"><li>About</li></Link>
          <Link to="/Careers_page"><li>Careers</li></Link>
          <Link to="/Support_page"><li>Support</li></Link>
        </ul>

        <div className= 'text-white gap-2 flex'>
          <button className='bg-[#1345a276] rounded-full py-1.5 px-8 cursor-pointer border border-blue-800 mr-5 hover:bg-blue-800 '>Signup</button>
          <button className='cursor-pointer'>Login</button>
        </div>
        </div>
      </nav>
  )
}

export default Navbar_components