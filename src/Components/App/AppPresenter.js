import React from "react";
import PropTypes from "prop-types";
import Player from "Components/Player";

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
      <React.Fragment>
        <Player player={playerOne} />
        <Player player={playerTwo} />
      </React.Fragment>
    ) : (
      <form onSubmit={startPlaying}>
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
        <input
          type="submit"
          disabled={playerOne === "" || playerTwo === ""}
          onClick={startPlaying}
          valiue="play"
        />
      </form>
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
