import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';

import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'

import AppRouter from './AppRouter';

const httpLink = createHttpLink({
  uri:'/graphql' })

const cache = new InMemoryCache()

const client = new ApolloClient({
  link:httpLink,
  cache
})

// client.query({
//   query:gql`
//   {
//     characters {
//       id
//       name,
//       imageURL
//     }
//   }
//   `
// }).then(res => console.log(res)
// ).catch( e => console.log(e))

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <AppRouter />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

