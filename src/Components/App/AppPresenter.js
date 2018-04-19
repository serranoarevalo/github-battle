import React from "react";
import PropTypes from "prop-types";

const AppPresenter = ({ playerOne, playerTwo, handleInput }) => (
  <React.Fragment>
    <h1>Github Battle</h1>
    <input
      type="text"
      value={playerOne}
      placeholder="Player One"
      onChange={handleInput}
      name="playerOne"
    />
    <input
      type="text"
      value={playerTwo}
      placeholder="Player Two"
      onChange={handleInput}
      name="playerTwo"
    />
    <button disabled={playerOne === "" || playerTwo === ""}>Play!</button>
  </React.Fragment>
);

AppPresenter.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default AppPresenter;
