import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUser {
      id
      email
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

export const GET_USER_TASKS = gql`
  query GetUserTasks($userId: Float!) {
    getUserTasks(userId: $userId) {
      id
      name
      priority
    }
  }
`;