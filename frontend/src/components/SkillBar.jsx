import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';

const icons = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJsSquare,
  react: FaReact,
  java: FaJava,
  nodejs : FaNodeJs,
};

const SkillBar = ({ skill, level, color}) => {
  const Icon = icons[skill.toLowerCase()];
  const levelMap = {
    expert: 'w-full',
    intermediate: 'w-3/4',
    beginner: 'w-1/2',
  };
  const levelClass = levelMap[level.toLowerCase()] || 'w-1/2';

  return (
    <div className="flex items-center mb-4">
      <Icon className={`text-4xl  mr-4 ${color} `} />
      <div className="w-full">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{skill.charAt(0).toUpperCase() + skill.slice(1)}</h4>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div className={`bg-accent h-2.5 rounded-full ${levelClass}`}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
