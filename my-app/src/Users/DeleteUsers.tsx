import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const DELETE_USER = gql`
  mutation DeleteUser($id: Float!) {
    deleteUser(id: $id) {
      id
      email
    }
  }
`;

const DeleteUser: React.FC = () => {
  const [id, setId] = useState('');
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    deleteUser({ variables: { id: parseFloat(id) } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="User ID" 
          required 
        />
        <button type="submit">Delete User</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>User deleted: {data.deleteUser.email}</p>}
    </div>
  );
};

export default DeleteUser;
