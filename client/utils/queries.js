import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  me {
    email
    firstName
    id
    lastName
    password
    pokedex_entries {
      id
      name
      sprite
    }
    username
  }
}
`;