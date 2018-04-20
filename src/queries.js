import { gql } from "apollo-boost";

const getByUsername = username => gql`
  {
    user(login: "${username}") {
      email
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
