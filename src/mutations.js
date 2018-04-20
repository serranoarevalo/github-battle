import gql from "graphql-tag";

const updatePlayerScore = () => gql`
  mutation updatePlayerScore($score: Int!, $player: String!) {
    updatePlayerScore(score: $score, player: $player) @client
  }
`;

const pickWinner = () => gql`
  mutation pickWinner($playerOne: String!, $playerTwo: String!) {
    pickWinner(playerOne: $playerOne, playerTwo: $playerTwo) @client
  }
`;

export { updatePlayerScore, pickWinner };
