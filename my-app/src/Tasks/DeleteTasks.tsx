import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../apollo/mutations';

const DeleteTask: React.FC<{taskName: string; onDeleted: () => void}> = ({ taskName, onDeleted }) => {
  const [deleteTask, { data, loading, error }] = useMutation(DELETE_TASK);

  const handleDelete = async () => {
    try {
      await deleteTask({ variables: { name: taskName } });
      onDeleted();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete Task'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>User deleted: {data.deleteTask.name}</p>}
    </div>
  );
};

export default DeleteTask;
