import ApolloClient from "apollo-boost";
import { GITHUB_API_TOKEN } from "./keys";
import { getScore } from "queries";

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
    defaults: {
      winner: ""
    },
    resolvers: {
      User: {
        score: (obj, args, context, info) => {
          return obj.followers.totalCount + obj.repositories.totalCount;
        }
      },
      Mutation: {
        pickWinner: (_, { playerOne, playerTwo }, { cache }) => {
          const userOne = cache.readQuery({ query: getScore(playerOne) }).user;
          const userTwo = cache.readQuery({ query: getScore(playerTwo) }).user;

          if (userOne.score > userTwo.score) {
            cache.writeData({ data: { winner: userOne.login } });
          } else {
            cache.writeData({ data: { winner: userTwo.login } });
          }

          return null;
        }
      }
    }
  }
});

export default client;
