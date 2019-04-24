import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./App";

  render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();