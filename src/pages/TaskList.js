import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';
import Header from '../components/Header';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched tasks:", data); // Log to verify the structure
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          console.error('Expected an array, but got:', data);
          setTasks([]); // Fallback to empty array
        }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error); // Handle fetch errors
        setTasks([]); // Ensure tasks is always an array
      });
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-3xl mb-4">Task Manager</h1>
      <Link to="/add" className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block">
        Add New Task
      </Link>
      <ul>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <li>No tasks available</li> // Fallback message
        )}
      </ul>
    </div>
  );
};

export default TaskList;
