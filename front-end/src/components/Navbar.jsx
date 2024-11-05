import React, { useState } from 'react';
import { Menu, X, Home, Settings } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-lg p-4 text-white ml-11 mr-11 m-11 rounded-lg flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Devs</div>
        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex md:gap-4 mt-4 md:mt-0 text-center md:text-left">
            <li>
              <a href="/" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <Home size={20} /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/blog" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="/p2p" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <span>P2P</span>
              </a>
            </li>
            <li>
              <a href="/podcast" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <span>Podcast</span>
              </a>
            </li>
            <li>
              <a href="/contest" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                 <span>Contest</span>
              </a>
            </li>
            <li>
              <a href="/event" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                 <span>Event</span>
              </a>
            </li>
            <li>
              <a href="/gallery" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a href="/team" className="flex items-center space-x-2 text-white hover:text-blue-600 px-4 py-2 md:py-0">
                <span>Team</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
