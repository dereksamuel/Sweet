import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/react-hooks";
import App from "./App.jsx";

const client = new ApolloClient({
  uri: "https://sweet-server-vercel-r6i1a35k4-dereksamuel.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
