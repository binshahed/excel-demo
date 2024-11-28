import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import logo from '../../assets/logo.svg'
import logoLight from '../../assets/logo_light.svg'
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io'
import CommonButton from '../buttons/CommonButton'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const toggleAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isOpen ? 1 : 0,
  })

  const submenuAnimation = useSpring({
    height: isSubmenuOpen ? 'auto' : '0px',
    opacity: isSubmenuOpen ? 1 : 0,
    overflow: 'hidden',
  })

  return (
    <div className="bg-white navbar-menu fixed top-0 left-0 w-full z-[1000]">
      <div className="container mx-auto">
        <div className="relative">
          {/* Navbar Container */}
          <div className="flex items-center justify-between px-4 py-3 text-black">
            <img src={logo} alt="Logo" className="h-10" />

            <div className="hidden md:block">
              <ul className="flex items-center space-x-10 font-semibold relative">
                <li className="hover:text-[#bbd60e]">Home</li>
                {/* Team Menu with Hover Effect */}
                <li className="relative group">
                  <div className="flex items-center cursor-pointer hover:text-[#bbd60e] duration-150">
                    Team
                    <IoIosArrowDown className="ml-1 mt-1 transform transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                  <ul className="absolute left-0 mt-0 w-48 bg-white font-normal shadow-md rounded-lg hidden group-hover:block">
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#bbd60e] duration-150 ">
                      Technology
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#bbd60e] duration-150 ">
                      Marketing
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#bbd60e] duration-150">
                      Creative Studio
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#bbd60e] duration-150">
                      UX Customer Support
                    </li>
                  </ul>
                </li>
                <li className="hover:text-[#bbd60e]">About</li>
                <li className="hover:text-[#bbd60e]">Blog</li>
                <li className="hover:text-[#bbd60e]">Career</li>
                <li>
                  <CommonButton>Get Started</CommonButton>
                </li>
              </ul>
            </div>

            {/* Toggle Button */}
            <button
              className="md:hidden text-black text-2xl"
              onClick={() => setIsOpen(true)}
            >
              <IoMdMenu />
            </button>
          </div>

          {/* Full-Screen Animated Navigation for Mobile */}
          {isOpen && (
            <animated.div
              style={toggleAnimation}
              className="md:hidden fixed top-0 left-0 w-full h-full bg-[#075fd1] text-white z-50 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3">
                {/* Brand on the Left */}
                <img src={logoLight} alt="Logo Light" className="h-10" />

                {/* Close Button on the Right */}
                <button
                  className="text-white text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <div className="bg-white rounded-2xl text-black m-5 p-6 overflow-y-auto h-[calc(100%-5rem)]">
                <ul className="flex flex-col space-y-8 text-lg font-medium">
                  <li className="border-b border-gray-300 pb-2">Home</li>
                  <li className="border-b border-gray-300 pb-2">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setIsSubmenuOpen((prev) => !prev)}
                    >
                      Team
                      <IoIosArrowDown
                        className={`ml-1 mt-1 transform ${
                          isSubmenuOpen ? 'rotate-180' : 'rotate-0'
                        } transition-transform duration-300`}
                      />
                    </div>
                    <animated.div style={submenuAnimation}>
                      {isSubmenuOpen && (
                        <ul className="mt-2 space-y-3 text-md text-gray-600">
                          <li>Technology</li>
                          <li>Marketing</li>
                          <li>Creative Studio</li>
                        </ul>
                      )}
                    </animated.div>
                  </li>
                  <li className="border-b border-gray-300 pb-2">About</li>
                  <li className="border-b border-gray-300 pb-2">Blog</li>
                  <li className="border-b border-gray-300 pb-2">Career</li>
                  <li>
                    <CommonButton>Get Started</CommonButton>
                  </li>
                </ul>
                <div className="mt-10">
                  <p className="text-md font-semibold">
                    Build and Manage Global HR Operations
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit maxime non illo quam repellat totam molestias culpa
                    illum eaque iure.
                  </p>
                </div>
              </div>
            </animated.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
