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
        calculateWinner: (_, { playerOne, playerTwo }, { cache }) => {
          const scoreOne = cache.readQuery({
            query: getScore(playerOne)
          })[playerOne];
          const scoreTwo = cache.readQuery({
            query: getScore(playerTwo)
          })[playerTwo];

          if (scoreOne > scoreTwo) {
            cache.writeData({ data: { winner: playerOne } });
            return null;
          } else {
            cache.writeData({ data: { winner: playerTwo } });
            return null;
          }
        }
      }
    }
  }
});

export default client;
