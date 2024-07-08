import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../apollo/mutations';

const DeleteUser: React.FC<{ userId: number; onDeleted: () => void }> = ({ userId, onDeleted }) => {
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER);

  const handleDelete = async () => {
    try {
      await deleteUser({ variables: { id: userId } });
      onDeleted(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete User'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>User deleted: {data.deleteUser.email}</p>}
    </div>
  );
};

export default DeleteUser;
