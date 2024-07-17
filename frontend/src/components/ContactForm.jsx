import useQueryEmail from '@/hooks/useQueryEmail';
import useAuth from '@/zustand/useAuth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const ContactForm = ({ darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { sendEmail, loading } = useQueryEmail();
  const { authUser } = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(authUser) await sendEmail(email, name, message);
    else toast.error("Please login first");

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mt-8 w-[80%]" id='contact'>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
          <div className="relative">
            <FiUser className="absolute top-2 left-2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border bg-gray-200 text-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
          <div className="relative">
            <FiMail className="absolute top-2 left-2 text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
          <div className="relative">
            <FiMessageSquare className="absolute top-2 left-2 text-gray-500 dark:text-gray-400" />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-200 text-black  focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 bg-accent text-white rounded-lg shadow-md
             hover:bg-accentHover transition duration-300 ease-in-out ${loading && " btn-disabled"} btn btn-primary`}
        >
          {loading ? <span className='loading loading-spinner loading-md bg-white'></span> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
