import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { onError } from "@apollo/link-error";

import App from "./App.jsx";
import { Provider } from "./Context.jsx";

const key = "currentUserToken";

const httpLink = createHttpLink({
  uri: "https://sweet-server-vercel-r6i1a35k4-dereksamuel.vercel.app/graphql",
});

const preventErrors = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    console.error(`[Network error]: ${networkError}`);
    sessionStorage.removeItem(key);
    location.href = "/";
  }
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(key);
  const authorization = token ? `Bearer ${token}` : "";
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink).concat(preventErrors),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("app")
);
