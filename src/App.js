import React from "react";
import { gql, useQuery } from "@apollo/client";

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring quote...</h1>
      <RandomQuote />
    </div>
  );
}

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      invalidProperty
      text
      author
    }
  }
`;

function RandomQuote() {
  const { data, loading, error } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (error) => {
      console.log("error", error);
      window.lastError = error;
    },
    errorPolicy: "all"
    //all errors will be catched within this component
  });
  if (loading) {
    return "Quote is loading...";
  }
  if (error) {
    return "Could not load quote!";
  }
  const { text, author } = data.randomQuote;
  return <Quote text={text} author={author} />;
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}
