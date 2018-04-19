import gql from "graphql-tag";

const getByUsername = username => gql`
  {
    user(login: "${username}") {
      email
    }
  }
`;

export { getByUsername };
