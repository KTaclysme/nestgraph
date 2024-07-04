import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($email: String!) {
    addUser(email: $email) {
      id
      email
    }
  }
`;

const AddUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ variables: { email } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <button type="submit">Add User</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>User added: {data.addUser.email}</p>}
    </div>
  );
};

export default AddUser;
