import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '/about' },
]

const extLinks = [
  { title: 'github', icon: FiGithub, href: 'https://github.com/yashubeast' },
]

const CompNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center max-w-9xl mx-auto px-10 py-4">
        
        <div className="text-4xl font-semibold w-1/3 text-left fg-purple">
          web
        </div>

        <div className="flex justify-center items-center w-1/3 space-x-10 text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="fg-purple"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-5 w-1/3 justify-end'>
          {extLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              className="fg-purple"
            >
              {link.icon ? (
                <link.icon size={28} />
              ) : (
                link.title
              )}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default CompNavbar
