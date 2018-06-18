import React from "react";
import PropTypes from "prop-types";
import Player from "Components/Player";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import { Button } from "Components/Shared";

injectGlobal`
  ${reset}
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  *{
    box-sizing:border-box;
  }
`;

const App = styled.div`
  background-image: linear-gradient(0deg, #b31569, #e63250);
  min-height: 100vh;
  padding-top: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 46px;
  color: white;
  font-weight: 600;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  background-color: white;
  box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.32);
  border-radius: 15px;
  padding: 50px;
`;

const Input = styled.input`
  background: #f2f2f2;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  padding: 0 15px;
  font-size: 14px;
  font-family: Roboto mono, sans-serif;
  font-weight: 400;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  transition: box-shadow 0.2s;
  &:focus {
    box-shadow: inset 0 0 0 1.5px #1b2c9a, inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  }
  &:first-child {
    margin-bottom: 30px;
  }
`;

const PlayersContainer = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 150px;
`;

const Players = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AppPresenter = ({
  playerOne,
  playerTwo,
  handleInput,
  playing,
  startPlaying
}) => (
  <App>
    <Title>Github Battle</Title>
    {playing ? (
      <PlayersContainer>
        <Players>
          <Player player={playerOne} />
          <Player player={playerTwo} />
        </Players>
      </PlayersContainer>
    ) : (
      <Form onSubmit={startPlaying}>
        <div>
          <Input
            type="text"
            value={playerOne}
            placeholder="Player One"
            onChange={handleInput}
            name="playerOne"
          />
          <Input
            type="text"
            value={playerTwo}
            placeholder="Player Two"
            onChange={handleInput}
            name="playerTwo"
          />
        </div>
        <Button
          type="submit"
          disabled={playerOne === "" || playerTwo === ""}
          onClick={startPlaying}
          valiue="play"
        />
      </Form>
    )}
  </App>
);

AppPresenter.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  startPlaying: PropTypes.func.isRequired
};

export default AppPresenter;
