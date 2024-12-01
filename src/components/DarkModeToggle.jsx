import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedPreference);

    if (storedPreference) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="transition text-xl p"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
