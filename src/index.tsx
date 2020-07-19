import './index.css'

import * as serviceWorker from './serviceWorker'

// apollo
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REACT_APP_SERVER_BASE_URL}/graphql`,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
