import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ darkMode }) => {
  return (
    <main id="home" className="w-full">
        <div className="relative">
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black' : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600'} opacity-75`}></div>
          <div className="relative max-w-7xl mx-auto py-20 px-6 text-center">
                <h2 className="text-5xl font-extrabold mb-4 animate-fadeInUp">Welcome to ChatApp</h2>
                <p className="text-lg mb-8 animate-fadeInUp animation-delay-2">Connect with your friends and family instantly.</p>
                <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-accent 
                hover:text-white transition duration-300"><Link to={"/signup"}>Get Started</Link></button>
          </div>
        </div>
      </main>
  )
}

export default Hero
