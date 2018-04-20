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
    winner @client
  }
`;

const getScore = user => gql`
  {
    user(login: "${user}"){
      score
      login
    }
  }
`;

export { getByUsername, getScore };
