import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import useTheme from '@/zustand/useTheme';
import React, { useEffect } from 'react';

function App() {
  const { darkMode, setDarkMode} = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [darkMode]);

  return (
    <div className={`h-full w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} 
        flex flex-col overflow-x-hidden`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Features />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
