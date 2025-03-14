// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';

// const AddTask = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const taskData = { title, description };

//     const response = await fetch('https://your-backend-url.com/tasks', {
//       method: 'POST',
//       body: JSON.stringify(taskData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       navigate('/');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//         <Header/>
//       <h1 className="text-3xl mb-4">Add a New Task</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
//           <input
//             type="text"
//             id="title"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
//           <textarea
//             id="description"
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;


// src/pages/AddTask.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the new task to the backend
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => response.json())
      .then((data) => {
        // After adding, redirect to the task list page
        navigate('/');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Header/>
      <h1 className="text-3xl mb-4">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg">Title</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Description</label>
          <textarea
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
