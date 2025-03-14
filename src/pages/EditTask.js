// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Header from '../components/Header';

// const EditTask = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the task to edit from the backend
//     fetch(`https://your-backend-url.com/tasks/${id}`)
//       .then(response => response.json())
//       .then(task => {
//         setTitle(task.title);
//         setDescription(task.description);
//       });
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedTask = { title, description };

//     const response = await fetch(`https://your-backend-url.com/tasks/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(updatedTask),
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
//       <h1 className="text-3xl mb-4">Edit Task</h1>
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
//           Update Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditTask;


// src/pages/EditTask.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate('/');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Edit Task</h1>
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
