import React from "react";
import PropTypes from "prop-types";

const AppPresenter = ({
  playerOne,
  playerTwo,
  handleInput,
  playing,
  startPlaying
}) => (
  <React.Fragment>
    <h1>Github Battle</h1>
    {playing ? (
      "playing"
    ) : (
      <React.Fragment>
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
        <button
          disabled={playerOne === "" || playerTwo === ""}
          onClick={startPlaying}
        >
          Play!
        </button>
      </React.Fragment>
    )}
  </React.Fragment>
);

AppPresenter.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  startPlaying: PropTypes.func.isRequired
};

export default AppPresenter;
