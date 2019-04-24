import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Graphql from './Graphql';
import { render } from "react-dom";
import {GET_COMPANIES, GET_COMPANIE} from './QueriesList';
import QueryTest from './QueryTest';

const CompaniesList = () => (
    <Query query={GET_COMPANIES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.companies.map(({ id, name, phone, mail, logo }) => (
          <div key={id}>
            <h1>{name}</h1>
            { console.log(name) }
            <p>Téléphone : {phone}</p>
            { console.log(phone) }
            <p>@mail : {mail}</p>
            { console.log(mail) }
            {Object.values(logo).map((url) =>
              <img src={"http://localhost:1337" + url} />
            )}
            

          </div>
        ));
      }}
    </Query>
  );

export default CompaniesList