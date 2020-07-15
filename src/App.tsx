import './App.css'

import React from 'react'
import { gql } from 'apollo-boost'
import logo from './logo.svg'
import Pages from './pages'
import { useHelloWorldQuery } from './generated/graphql'

const App = () => {
  const { data, loading, error } = useHelloWorldQuery()

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (error) return null

  return (
    <div className="App">
      {data?.helloWorld}
      <Pages />
    </div>
  )
}

export default App

gql`
  query HelloWorld {
    helloWorld
  }
`
