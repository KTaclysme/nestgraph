import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_TASKS } from '../apollo/queries';
import DeleteTask from './DeleteTasks';

const TaskList: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER_TASKS);

  const handleTaskDeleted = () => {
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User Tasks</h2>
      <ul>
        {data?.getUserTasks?.map((task: {userId: number, name: string, priority: number}) => (
          <li key={task.name}>
            <strong>{task.name}</strong> - Priority: {task.priority}
            <DeleteTask taskName={task.name} onDeleted={handleTaskDeleted} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
