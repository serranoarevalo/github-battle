import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "apollo";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  state = {
    playerOne: "",
    playerTwo: "",
    playing: false
  };
  render() {
    return (
      <ApolloProvider client={client}>
        <AppPresenter
          {...this.state}
          handleInput={this._handleInput}
          startPlaying={this._startPlaying}
        />
      </ApolloProvider>
    );
  }
  _handleInput = e => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };
  _startPlaying = () => {
    this.setState({
      playing: true
    });
  };
}

export default AppContainer;
