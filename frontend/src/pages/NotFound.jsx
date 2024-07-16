import useTheme from '@/zustand/useTheme';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 w-full">
      <div className="max-w-md px-4 py-8 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">404 - Not Found</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

