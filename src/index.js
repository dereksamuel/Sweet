import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/react-hooks";
import App from "./App.jsx";
import { Provider } from "./Context.jsx";

const client = new ApolloClient({
  uri: "https://sweet-server-vercel-r6i1a35k4-dereksamuel.vercel.app/graphql",
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
