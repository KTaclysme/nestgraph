import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../apollo/queries';
import DeleteUser from './DeleteUsers';

const Users: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_USERS);

  const handleUserDeleted = () => {
    refetch(); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users</h2>
      {data.getAllUser.map((user: { id: number; email: string }) => (
        <div key={user.id}>
          <span>{user.email}</span>
          <DeleteUser userId={user.id} onDeleted={handleUserDeleted} />
        </div>
      ))}
    </div>
  );
};

export default Users;
