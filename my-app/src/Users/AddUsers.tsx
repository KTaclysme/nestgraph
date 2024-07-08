import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../apollo/mutations';
import { GET_ALL_USERS } from '../apollo/queries';

const AddUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
    onError: (error) => {
      console.error("Error adding user:", error);
    },
    onCompleted: () => {
      setEmail('');
      console.log("User added successfully!");
    }
  });

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
        <button type="submit" disabled={loading}>
          {loading ? 'Adding User...' : 'Add User'}
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>User added: {data.addUser.email}</p>}
    </div>
  );
};

export default AddUser;
