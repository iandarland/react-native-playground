import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  me {
    id
    username
    firstName
    lastName
    email
    password
  }
}
`;