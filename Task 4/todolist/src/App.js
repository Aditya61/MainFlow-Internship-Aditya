import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskNo, setTaskNo] = useState(0);

  const addTask = () => {
    if (taskName.trim() === '') return;

    setTaskNo((prevTaskNo) => prevTaskNo + 1);
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: taskNo + 1, name: taskName, status: 'Processing' },
    ]);
    setTaskName('');
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: 'Completed' } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4 px-8 rounded-lg shadow-lg mb-8">
        To Do List
      </h1>
      <div className="mb-8 w-full max-w-md">
        <p className="font-bold text-xl mb-2">Task Name :</p>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          id="addTaskButton"
          onClick={addTask}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <div className="w-full max-w-2xl">
        <table cellPadding={10} id="task-list" className="w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} id={task.id.toString()} className="border-t border-gray-300">
                <td id={`t${task.id}`} className="py-2 px-4">{task.name}</td>
                <td className="py-2 px-4">{task.status}</td>
                <td className="py-2 px-4 flex space-x-2">
                  {task.status === 'Processing' && (
                    <button
                      onClick={() => completeTask(task.id)}
                      className="bg-green-500 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-600"
                    >
                      Complete
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
