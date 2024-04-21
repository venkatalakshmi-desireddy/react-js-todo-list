import React, { useState } from 'react';
import './todolist.css';
function TodoList() {
  const [task, setTask] = useState([]);
  const [addTask, setaddTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const add = () => {
    if (addTask.trim() !== '') {
      setTask([...task, addTask]);
      setaddTask('');
    }
  };

  const Delete = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const Edit = (index) => {
    setEditIndex(index);
    setEditTask(task[index]);
  };

  const Update = () => {
    if (editTask.trim() !== '') {
      const updatedTasks = [...task];
      updatedTasks[editIndex] = editTask;
      setTask(updatedTasks);
      setEditIndex(null);
      setEditTask('');
    }
  };

  return (
    <div id="total">
      <h1>todo list application</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Course"
          value={addTask}
          onChange={(e) => setaddTask(e.target.value)}
        />
        <button id="add1"onClick={add}>Add skill</button>
      </div>
      <h1>frontend technical skill names</h1>
    
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button id="update1" onClick={Update}>Update</button>
              </>
            ) : (
              <>
                {task}
                <button id="delete1" onClick={() => Delete(index)}>Delete</button>
                <button id="edit1" onClick={() => Edit(index)}>Edit</button>

              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;