import gql from "graphql-tag";

export const GET_USER = gql`
  query($user: String!) {
    user(login: $user) {
      email
      login
      avatarUrl
      bio
      followers {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;
