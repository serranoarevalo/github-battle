import ApolloClient from "apollo-boost";
import { GITHUB_API_TOKEN } from "./keys";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${GITHUB_API_TOKEN}`
      }
    });
  },
  clientState: {
    resolvers: {
      User: {
        score: (obj, args, context, info) => {
          return obj.followers.totalCount + obj.repositories.totalCount;
        }
      }
    }
  }
});

export default client;
