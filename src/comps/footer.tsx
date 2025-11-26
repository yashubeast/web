import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { title: 'Github', href: 'https://github.com/yashubeast' }
  // { title: 'Blog', href: '/blog' },
  // { title: 'About', href: '/about' },
]

const CompFooter: React.FC = () => {
  return (
    <nav className="bg-black2">
      <div className="flex justify-center px-10 py-4">
        
        {/* <div className="text-4xl font-semibold color-purple"> */}
        {/*   web */}
        {/* </div> */}

        <div className="flex items-center space-x-10 text-2xl">
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

      </div>
    </nav>
  )
}

export default CompFooter
