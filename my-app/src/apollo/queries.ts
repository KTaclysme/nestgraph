import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUser {
      id
      email
    }
  }
`;

export const GET_USER_TASKS = gql`
  query GetUserTasks {
    getUserTasks {
      userId
      name
      priority
    }
  }
`;