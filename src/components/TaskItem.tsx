import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <h3 onClick={() => onToggle(task.id)}>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </div>
  );
};

export default TaskItem;