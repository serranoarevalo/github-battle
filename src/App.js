import React, { Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { getByUsername } from "./queries";
import { GITHUB_API_TOKEN } from "./keys";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${GITHUB_API_TOKEN}`
      }
    });
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Fragment>
      <h1>Github Battle!</h1>
      <Query asyncMode query={getByUsername("serranoarevalo")}>
        {({ loading, error, data }) => {
          if (loading) return <span>loading</span>;
          return <span>{data.user.email}</span>;
        }}
      </Query>
    </Fragment>
  </ApolloProvider>
);

export default App;
