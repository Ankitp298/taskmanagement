// import React from 'react';
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

// const TaskItem = ({ task, deleteTask }) => {
//   return (
//     <li className="mb-4 p-4 border border-gray-200 rounded-lg">
//       <h2 className="text-xl font-semibold">{task.title}</h2>
//       <p>{task.description}</p>
//       <div className="mt-2">
//         <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
//         <Link to={`/edit/${task._id}`} className="ml-2 text-blue-500">Edit</Link>
//       </div>
//     </li>
//   );
// };

// export default TaskItem;


// src/components/TaskItem.js
const TaskItem = ({ task, deleteTask }) => {
    return (
        <li className="mb-4 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        <div className="mt-2">
          <button onClick={() => deleteTask(task._id)} className="text-red-500">
            Delete
          </button>
          <Link to={`/edit/${task._id}`} className="ml-2 text-blue-500">
            Edit
          </Link>
        </div>
      </li>
    );
};

export default TaskItem;