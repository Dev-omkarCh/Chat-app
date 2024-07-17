import NavigationNavbar from '@/components/NavigationNavbar';
import useSendEmail from '@/hooks/useSendEmail';
import useSignup from '@/hooks/useSignup';
import useAuth from '@/zustand/useAuth';
import useTheme from '@/zustand/useTheme';
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Signup() {
  const [page, setPage] = useState(1);
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { darkMode, setDarkMode } = useTheme();
  const { loading, signup } = useSignup();
  const { sendEmail } = useSendEmail();
  const {authUser} = useAuth();

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup( fullname, username, password, confirmPassword, gender, email);
    if(authUser){
      await sendEmail( email, fullname );
    }
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
    <div className={`flex items-center justify-center min-h-screen w-full ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} p-4 sm:p-6 lg:p-8`}>
      <Toaster />
      <NavigationNavbar />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Signup for ChatApp</h2>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FiSun className="w-6 h-6 text-gray-500 dark:text-gray-300" /> : <FiMoon className="w-6 h-6 text-gray-500 dark:text-gray-300" />}
          </button>
        </div>

        {page === 1 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button
              type="button"
              onClick={nextPage}
              className="w-full px-4 py-2 bg-accent hover:bg-accentHover text-white rounded-md font-semibold focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-accent">
               Next
            </button>
          </form>
        )}

        {page === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              />
            </div>
            <button
              type="button"
              onClick={prevPage}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextPage}
              className="px-4 py-2  text-white rounded-md font-semibold bg-accent hover:bg-accentHover focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                Next
            </button>
          </form>
        )}

        {page === 3 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent dark:text-gray-300"
              />
            </div>
            <button
              type="button"
              onClick={prevPage}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Previous
            </button>
            <button
              type="submit"
              className={`px-4 py-2  text-white rounded-md font-semibold bg-accent hover:bg-accentHover focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          accentg && " btn-disabled"} btn btn-primary `}>
              {loading ? <span className='loading loading-spinner loading-md  bg-white'></span> : "Signup"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account? <Link to={"/login"} className="text-accentLight hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
