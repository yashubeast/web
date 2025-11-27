import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { FiGithub } from 'react-icons/fi'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import './navbar.css'

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '/about' },
]

// const extLinks = [
//   { title: 'github', icon: FiGithub, href: 'https://github.com/yashubeast' },
// ]

// NOTE: add inert so u can't tab into the nav buttons while its off the screen aka hidden


const CompNavbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
    <button className='h-14 w-14 nav-open flex justify-center items-center g-button'
        onClick={handleOpen}
      >
      <IoMenu className='w-6 h-6'/>
    </button>

    <nav className={`flex justify-between items-center w-full ${isOpen ? 'show' : ''}`}>
      {/* <div className="flex justify-between items-center max-w-9xl mx-auto px-10 py-4"> */}
        
        <div className="title flex justify-between">
          <p className='p-[1em_2em] g-button '>Universium</p>
          <button className='w-14 h-14 nav-close flex justify-center items-center g-button '
            onClick={handleClose}
          >
          <IoClose className='w-7 h-7'/>
          </button>
        </div>

        <ul className="list-none flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            const baseClasses = 'p-[1em_2em] g-button cursor-pointer'
            const activeClasses = 'fg-purple font-bold border-b-2 border-purple'
            return (
            <Link
              key={link.title}
              to={link.href}
              className={isActive ? `${baseClasses} ${activeClasses}` : baseClasses}
            >
              {link.title}
            </Link>
          )})}
        </ul>

        {/* <div className=''> */}
        {/*   {extLinks.map((link) => ( */}
        {/*     <a */}
        {/*       key={link.title} */}
        {/*       href={link.href} */}
        {/*       target="_blank" */}
        {/*       rel="noopener noreferrer" */}
        {/*       aria-label={link.title} */}
        {/*       className="fg-purple" */}
        {/*     > */}
        {/*       {link.icon ? ( */}
        {/*         <link.icon size={28} /> */}
        {/*       ) : ( */}
        {/*         link.title */}
        {/*       )} */}
        {/*     </a> */}
        {/*   ))} */}
        {/* </div> */}

      {/* </div> */}
    </nav>

    <div className='nav-overlay fixed inset-0' onClick={handleClose}>
    </div>
  </>
  )
}

export default CompNavbar
