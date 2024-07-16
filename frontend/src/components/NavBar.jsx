import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const NavBar = ({ darkMode, setDarkMode }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <header className="bg-white dark:bg-gray-800 shadow-lg w-full">
            <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
            <div className="text-3xl font-bold">ChatApp</div>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 font-semibold">
                <li><Link className="text-accentLight">Home</Link></li>
                <li><Link to="/about" className="hover:text-accentLight">About</Link></li>
                <li><Link to="#contact" className="hover:text-accentLight">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex items-center">
                <button onClick={toggleDarkMode} className="mr-4 focus:outline-none">
                {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
                </button>
                <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
                </div>
            </div>
            </div>
            {isOpen && (
            <nav className="md:hidden">
                <ul className="flex flex-col items-center space-y-2 py-4 font-bold">
                <li><a className="text-accentLight">Home</a></li>
                <li><Link Link to="/about" className="hover:text-accentLight">About</Link></li>
                <li><Link href="#contact" className="hover:text-accentLight">Contact</Link></li>
                </ul>
            </nav>
            )}
        </header>
    )
}

export default NavBar
