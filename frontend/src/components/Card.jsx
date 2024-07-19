import React from 'react';

const Card = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="w-full min-h-[40%] sm:w-1/2 p-4">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <Icon className={`text-6xl ${color} mb-4`} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
