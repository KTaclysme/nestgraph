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

export const GET_USER_TASKS = gql`
  query GetUserTasks($userId: Float!) {
    getUserTasks(userId: $userId) {
      id
      name
      priority
    }
  }
`;