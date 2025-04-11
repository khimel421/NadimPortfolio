import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion } from "motion/react"
import { useContext, useRef } from 'react';
import { Context } from "../contextProvider/ContextProvider";

const  MobileNavigation = () => {
  // Replace these with your actual refs
  const {aboutSection, heroSection, serviceSection, recentWorkSection, contact} = useContext(Context)

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-lg md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <nav className="flex justify-around items-center p-2">
        {/* Home */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-pink-500 transition-colors"
          aria-label="Home"
        >
          <FaHome className="text-xl mb-1" />
          <span className="text-xs">Home</span>
        </button>

        {/* About */}
        <button 
          onClick={() => handleScroll(aboutSection)}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-pink-500 transition-colors"
          aria-label="About"
        >
          <FaUser className="text-xl mb-1" />
          <span className="text-xs">About</span>
        </button>

        {/* Services */}
        <button 
          onClick={() => handleScroll(serviceSection)}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-pink-500 transition-colors"
          aria-label="Services"
        >
          <FaTools className="text-xl mb-1" />
          <span className="text-xs">Services</span>
        </button>

        {/* Work */}
        <button 
          onClick={() => handleScroll(recentWorkSection)}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-pink-500 transition-colors"
          aria-label="Work"
        >
          <FaBriefcase className="text-xl mb-1" />
          <span className="text-xs">Work</span>
        </button>

        {/* Contact */}
        <button 
          onClick={() => handleScroll(contact)}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-pink-500 transition-colors"
          aria-label="Contact"
        >
          <FaEnvelope className="text-xl mb-1" />
          <span className="text-xs">Contact</span>
        </button>
      </nav>
    </motion.div>
  );
};

export default MobileNavigation;