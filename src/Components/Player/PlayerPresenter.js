import React from "react";
import PropTypes from "prop-types";

const PlayerPresenter = ({ data, loading, error }) =>
  loading ? "loading" : data.user.email;

PlayerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default PlayerPresenter;
