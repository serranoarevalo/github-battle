import { gql } from "apollo-boost";

const getByUsername = username => gql`
  {
    user(login: "${username}") { 
      email
      login
      avatarUrl,
      bio,
      followers {
        totalCount
      }
      repositories {
        totalCount
      }
    }
    winner @client
  }
`;

const getScore = player => gql`
{
  ${player} @client
} 
`;

export { getByUsername, getScore };
