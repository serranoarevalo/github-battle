import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { pickWinner } from "mutations";
import { Button } from "Components/Shared";
import styled from "styled-components";

const FightButton = Button.withComponent("button");

const FightPresenter = ({ playerOne, playerTwo }) => (
  <Mutation mutation={pickWinner()}>
    {pickWinner => (
      <FightButton
        onClick={() => pickWinner({ variables: { playerOne, playerTwo } })}
      >
        Fight!
      </FightButton>
    )}
  </Mutation>
);

FightPresenter.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired
};

export default FightPresenter;
