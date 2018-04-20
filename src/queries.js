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
      score @client
    }
  }
`;

const getWinner = () => gql`
  {
    winner
  }
`;

export { getByUsername, getWinner };
