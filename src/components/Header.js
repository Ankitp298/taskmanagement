// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-blue-500 p-4 text-white text-center shadow-md">
//       <h1 className="text-xl font-semibold">Task Manager</h1>
//       <nav className="mt-2">
//         <Link to="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
//         <Link to="/add" className="text-white hover:text-gray-200 mx-2">Add Task</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// Dark Mode

// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="bg-blue-500 p-4 text-white text-center shadow-md">
      <h1 className="text-xl font-semibold">Task Manager</h1>
      <nav className="mt-2">
        <Link to="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
        <Link to="/add" className="text-white hover:text-gray-200 mx-2">Add Task</Link>
      <button
        onClick={toggleDarkMode}
        className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        Toggle Dark Mode
      </button>
      </nav>
    </header>
  );
};

export default Header;
