import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = 'https://graphql-pokeapi.vercel.app/api/graphql'
const cache = new InMemoryCache()
const client = new ApolloClient({ uri, cache })

const render = (Component) =>
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>,
    document.getElementById('root'),
  )

render(hot(App))
