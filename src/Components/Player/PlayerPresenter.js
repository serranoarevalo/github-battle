import React from "react";
import PropTypes from "prop-types";

const PlayerPresenter = ({ data, loading, error }) =>
  loading ? "loading" : data.user.email;

PlayerPresenter.propTypes = {};

export default PlayerPresenter;
