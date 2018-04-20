import ApolloClient from "apollo-boost";
import { getScore } from "queries";
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
    defaults: {
      winner: 0
    },
    resolvers: {
      Mutation: {
        updatePlayerScore: (_, { score, player }, { cache }) => {
          cache.writeData({ data: { [player]: score } });
          return null;
        },
        calculateWinner: (_, args, { cache }) => {
          const { playerOne } = cache.readQuery({
            query: getScore("playerOne")
          });
          const { playerTwo } = cache.readQuery({
            query: getScore("playerTwo")
          });

          if (playerOne > playerTwo) {
            cache.writeData({ data: { winner: 1 } });
            return null;
          } else {
            cache.writeData({ data: { winner: 2 } });
            return null;
          }
        }
      }
    }
  }
});

export default client;
