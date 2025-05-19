import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Modal from './components/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(true);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  }

  const toggleModal = () => {
    console.log("toggle");
    setIsModal(false);
  }
  
  React.useEffect(() => { 
    document.documentElement.classList.toggle("dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  }, [])

  return (
      <div className='bg-white dark:bg-neutral-800'>
          {/* Navbar */}
          <nav className="bg-white dark:bg-neutral-800 p-5">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                  <div>
                  <div className="text-white font-lobster text-5xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">Lite.beer </div>
                  <div className="text-white font-lobster text-2xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">& other stuff </div>
                  </div>
                  {/* Hamburger menu for small screens */}
                  <div className="lg:hidden">
                      <button onClick={toggleMenu} className="text-white focus:outline-none">
                          <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"
                              ></path>
                          </svg>
                      </button>
                  </div>

                  {/* Navigation links */}
                  <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
                      <a href="#Home" className="text-white font-sans px-4 py-2 hover:text-orange-600 ">Info</a>
                      <a href="#Beers" className="text-white  px-4 py-2  hover:text-orange-600">Beers</a>
                  </div>
              </div>
          </nav>
          {isModal && 
            <Modal onAccept={toggleModal} />
          }

      </div>
  );
}

export default App
