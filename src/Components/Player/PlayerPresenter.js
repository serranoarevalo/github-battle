import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { updatePlayerScore } from "mutations";

const PlayerPresenter = ({ data, loading, error, gqlNumber }) =>
  loading ? (
    "loading"
  ) : (
    <Mutation mutation={updatePlayerScore()}>
      {(updatePlayerScore, _) => (
        <button
          onClick={() =>
            updatePlayerScore({
              variables: {
                score: Math.floor(Math.random() * 10),
                player: gqlNumber
              }
            })
          }
        >
          {data.user.email}
        </button>
      )}
    </Mutation>
  );

PlayerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  gqlNumber: PropTypes.string.isRequired
};

export default PlayerPresenter;
