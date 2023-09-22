import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  // used to store and manage data fetched from a GraphQL server in a client-side cache, enabling faster access to the data without the need for repeated requests to the server.
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const URL = "https://serene-everglades-86863-9deb6e9dd03e.herokuapp.com/";
// const URL = "https://examples/devmastery.pl/random-stuff/graphql/";
// defining URL where my server is available
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL,
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
