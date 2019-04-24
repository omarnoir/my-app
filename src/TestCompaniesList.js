// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { Query } from "react-apollo";
// import Graphql from './Graphql';
// import { render } from "react-dom";
// import {GET_COMPANIES, GET_COMPANIE} from './QueriesList';
// import QueryTest from './QueryTest';


// const TestCompaniesList = () => (
//     var client = new ApolloClient({
//         uri: "http://localhost:1337/graphql"
//     });
    
//     client
//         .query({
//         query: gql`
//             {
//             companies {
//                 _id
//                 name
//                 phone
//                 mail
//                 logo{
//                 url
//                 }
//             }
//             }
//         `
//         })
//         .then(result => console.log(result));
// );

// export default TestCompaniesList