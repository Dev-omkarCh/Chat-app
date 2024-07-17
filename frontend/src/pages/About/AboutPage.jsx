import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import Card from '@/components/Card';
import SkillBar from '@/components/SkillBar';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiSocketdotio, SiExpress } from 'react-icons/si';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import useTheme from '@/zustand/useTheme';
import { Toaster } from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const AboutPage = () => {
  const { darkMode, setDarkMode} = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const technologies = [
    {
      title: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, used to build scalable network applications.',
      icon: FaNodeJs,
      color : "text-green-400"
    },
    {
      title: 'Express',
      description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      icon: SiExpress,
      color : "text-yellow-400"
    },
    {
      title: 'Socket.io',
      description: 'Enables real-time, bidirectional communication between web clients and servers. An Amazing technology for sending realtime messages',
      icon: SiSocketdotio,
      color : "text-white"
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications where data changes over time.',
      icon: FaReact,
      color : "text-blue-600"
    },
  ];

  const skills = [
    { skill: 'html', level: 'expert', color : "text-orange-600"},
    { skill: 'css', level: 'intermediate', color : "text-cyan-300" },
    { skill: 'js', level: 'intermediate', color : "text-yellow-300" },
    { skill: 'react', level: 'intermediate', color : "text-blue-600" },
    { skill: 'java', level: 'intermediate', color : "text-red-400" },
    { skill: 'nodejs', level: 'intermediate', color : "text-green-400" },
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''} w-full h-full overflow-x-hidden scroll-smooth`}>
      <Toaster />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className=" bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 relative flex justify-center items-center flex-col">
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-800" />}
          </button>

          <Link to={"/"} className="absolute top-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
             <IoMdArrowBack className={`${darkMode ? "text-white" : "text-gray-900"}`} />
          </Link>


          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About</h1>
          <div className="flex flex-wrap -mx-4 mb-8">
            {technologies.map((tech) => (
              <Card key={tech.title} title={tech.title} description={tech.description} icon={tech.icon} color={tech.color} />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="mb-8 w-[70%]">
            {skills.map(({ skill, level, color }) => (
              <SkillBar key={skill} skill={skill} level={level} color={color} />
            ))}
          </div>
          <ContactForm darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
