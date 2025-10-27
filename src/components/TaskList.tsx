import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  filter: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, filter, onToggle, onDelete }) => {
  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'active' ? !task.isCompleted : task.isCompleted
  );

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;