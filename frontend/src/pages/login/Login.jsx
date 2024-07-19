import useTheme from '@/zustand/useTheme';
import useLogin from '@/hooks/useLogin';
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavigationNavbar from '@/components/NavigationNavbar';

function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const { darkMode, setDarkMode } = useTheme();
  const { loading, login } = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login( username, password );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex items-center justify-center min-h-screen 
    ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} p-4 sm:p-6 lg:p-8 w-full relative flex flex-col`}>
      <NavigationNavbar />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg">
      <Toaster />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FiSun className="w-6 h-6 text-gray-500 dark:text-gray-300" /> : <FiMoon className="w-6 h-6 text-gray-500 dark:text-gray-300" />}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              value={ username }
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:text-gray-300"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-accent hover:bg-accentHover text-white rounded-md font-semibold
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent
               ${loading && " btn-disabled"} btn btn-primary `}>
                {loading ? <span className='loading loading-spinner loading-md bg-white'></span> : "login"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account? <Link to={"/signup"} className="text-accentLight hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
