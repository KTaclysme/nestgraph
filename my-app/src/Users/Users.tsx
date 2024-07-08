import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../apollo/queries';

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getAllUser.map((user: { id: number; email: string }) => (
      <div key={user.id}>{user.email}</div> 
    ))}
    </div>
  );
};

export default Users;
