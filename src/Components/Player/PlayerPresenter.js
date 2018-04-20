import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { updatePlayerScore } from "mutations";

const PlayerPresenter = ({ data, loading, error }) =>
  loading ? (
    "loading"
  ) : (
    <Mutation mutation={updatePlayerScore()}>
      {(updatePlayerScore, _) => (
        <button
          onClick={() =>
            updatePlayerScore({ variables: { score: 0, player: "one" } })
          }
        >
          {data.user.email}
        </button>
      )}
    </Mutation>
  );

PlayerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default PlayerPresenter;
