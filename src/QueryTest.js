import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Graphql from './Graphql';
import { render } from "react-dom";
import {GET_COMPANIES, GET_COMPANIE} from './QueriesList';

const QueryTest = ({client, QUERY}) => {
      
      client
        .query({
          query: 
            {QUERY}
        })
        .then(result => console.log(result));

}

export default QueryTest