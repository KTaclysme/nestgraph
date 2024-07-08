import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_TASKS } from '../apollo/queries';
import { Task } from '../types';

const TaskList: React.FC = () => {
  const { loading, error, data } = useQuery<{ getUserTasks: Task[] }>(GET_USER_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User Tasks</h2>
      <ul>
        {data?.getUserTasks.map(task => (
          <li key={task.id}>
            <strong>{task.name}</strong> - Priority: {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
