import gql from "graphql-tag";

const getByUsername = username => gql`
  {
    user(login: "${username}") {
      email
    }
  }
`;

const getScore = player => gql`
query GetScore${player}{
  ${player} @client
} 
`;

export { getByUsername, getScore };
