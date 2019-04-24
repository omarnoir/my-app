import React from 'react';
import ReactDOM from 'react-dom';
 
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Fetching from './Fetching';
import Error from './Error';
import CompaniesList from './CompaniesList';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});

const GET_COMPANIES = gql`
  {
    companies {
      id
      name
     }
  }
`;

const Companies = () => (

    <Query query={GET_COMPANIES}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        if (loading) return "Loading...";
        return (
            <select name="companies">
              {data.companies.map(company => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          );
        }}
      </Query>
    );
// const CompagniesList = client
//   .query({
//     query: {GET_COMPANIES}
//   })
//   .then(CompagniesList => console.log(CompagniesList));

const Graphql = () => (
    <table className="companies">
        <tbody>
            {
                // entries.map(({id, name}) => (
                    <tr>
                    </tr>

            }
        </tbody>

    </table>
)

export default Graphql
