import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const toggleTask = (id: string) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  const deleteTask = (id: string) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="container">
      <h1>Ежедневник</h1>
      <TaskForm onAdd={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')}>Активные</button>
        <button onClick={() => setFilter('completed')}>Завершённые</button>
      </div>
      <TaskList tasks={tasks} filter={filter} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;