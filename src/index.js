import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloProvider,
} from "@apollo/client";

const URL = "https://serene-everglades-86863-9deb6e9dd03e.herokuapp.com/";
// const URL = "https://examples/devmastery.pl/random-stuff/graphql/";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL,
  }),
});

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;

client
  .query({ query: RANDOM_QUOTE_QUERY })
  .then((result) => console.log("query result is", result.data));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
