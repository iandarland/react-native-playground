import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user {
        firstName
        lastName
        username
        pokedex_entries {
            id
        }
        id
        email
        }
        token
    }
    }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      id
      firstName
      lastName
      pokedex_entries {
        id
      }
      email
      username
    }
  }
}
`;