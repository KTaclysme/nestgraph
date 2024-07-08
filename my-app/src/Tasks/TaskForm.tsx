import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_TASK } from '../apollo/mutations';
import { Task } from '../types';
import { GET_USER_TASKS } from '../apollo/queries';

interface AddTaskForm {
  name: string;
  priority: number;
  userId: number;
}

const TaskForm: React.FC = () => {
  const [formData, setFormData] = useState<AddTaskForm>({
    name: "",
    priority: 1,
    userId: 1,
  });

  const [addTask, { loading, error }] = useMutation<{ addTask: Task }>(ADD_TASK, {
    refetchQueries: [{ query: GET_USER_TASKS, variables: { userId: formData.userId } }],
    onError: (error) => {
      console.error("Error adding task:", error);
    },
    onCompleted: () => {
      setFormData({ name: "", priority: 1, userId: 1 });
      console.log("Task added successfully!");
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addTask({
        variables: {
          name: formData.name,
          priority: parseInt(formData.priority.toString()),
          userId: parseInt(formData.userId.toString())
        }
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Task name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="priority"
        type="number"
        placeholder="Priority"
        value={formData.priority}
        onChange={handleChange}
      />
      <input
        name="userId"
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
