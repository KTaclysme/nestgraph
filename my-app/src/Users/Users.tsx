import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUser {
      id
      email
    }
  }
`;

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
