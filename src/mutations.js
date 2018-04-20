import gql from "graphql-tag";

const updatePlayerScore = () => gql`
  mutation updatePlayerScore($score: Int!, $player: String!) {
    updatePlayerScore(score: $score, player: $player) @client
  }
`;

const calculateWinner = () => gql`
  mutation calculateWinner {
    calculateWinner @client
  }
`;

export { updatePlayerScore, calculateWinner };
