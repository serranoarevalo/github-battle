import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import PlayerPresenter from "./PlayerPresenter";
import { getByUsername } from "queries";

class PlayerContainer extends Component {
  static propTypes = {
    player: PropTypes.string.isRequired,
    gqlNumber: PropTypes.string.isRequired
  };
  render() {
    const { player, gqlNumber } = this.props;
    return (
      <Query query={getByUsername(player)}>
        {({ data, loading, error }) => (
          <PlayerPresenter
            data={data}
            loading={loading}
            error={error}
            gqlNumber={gqlNumber}
          />
        )}
      </Query>
    );
  }
}

export default PlayerContainer;
