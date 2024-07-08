import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_TASK } from '../apollo/mutations';
import { Task } from '../types';
import { cp } from 'fs';

interface AddUserForm {
  name: string;
  priority: number;
  userId: number;
}

const TaskForm: React.FC = () => {
  
  const [formData, setFormData] = useState<AddUserForm>({
    name: "",
    priority: 1,
    userId: 1,
  });
  
  const [addTask, { loading, error }] = useMutation<{ addTask: Task }>(ADD_TASK);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    
    setFormData({ ...formData, [name]: value });
};

const handleAddUser = async () => {
  try {
      // @ts-expect-error -ignore
      await addTask({
          variables: {
              createUserInput: {
                name: formData.name,
                priority: parseInt(formData && formData.priority),
                  userId: formData.userId,
              },
          },
      });
      setFormData({ priority: 1, name: "", userId: 1 });
  } catch (error) {
      console.error("Erreur lors de l'ajout d'utilisateur:", error);
  }
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const priority = formData.priority ? parseInt(formData.priority) : undefined;  
      // const userId = formData.userId ? parseInt(formData.userId) : undefined;    
      const { data } = await addTask({
        variables: { name, priority, userId }
      });
      
      console.log('Task added:', data?.addTask);
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      name = "name"
        type="text"
        placeholder="Task name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
      name = "priority"
        type="number"
        placeholder="Priority"
        value={formData.priority}
        onChange={handleChange}
      />
      <input
      name = "userId"
        type="number"
        placeholder="User ID"
        value={formData.userId}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding Task...' : 'Add Task'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default TaskForm;
