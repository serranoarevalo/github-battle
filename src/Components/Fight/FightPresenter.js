import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { pickWinner } from "mutations";

const FightPresenter = ({ playerOne, playerTwo }) => (
  <Mutation mutation={pickWinner()}>
    {pickWinner => (
      <button
        onClick={() => pickWinner({ variables: { playerOne, playerTwo } })}
      >
        Fight!
      </button>
    )}
  </Mutation>
);

FightPresenter.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired
};

export default FightPresenter;
