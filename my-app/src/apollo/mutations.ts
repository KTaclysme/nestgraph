import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($email: String!) {
    addUser(email: $email) {
      id
      email
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($name: String!, $priority: Float!, $userId: Float!) {
    addTask(name: $name, priority: $priority, userId: $userId) {
      name
      priority
      userId
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Float!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($name: String!) {
    deleteTask(name: $name) {
      name
    }
  }
`;
