import React from "react";
import { Query } from "react-apollo";
import { getWinner } from "queries";

const FightPresenter = () => (
  <Query query={getWinner()}>
    {data => {
      console.log(data);
      return "stuff";
    }}
  </Query>
);

export default FightPresenter;
