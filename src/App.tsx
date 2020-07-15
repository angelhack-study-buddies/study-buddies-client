import './App.css'

import React from 'react'
import { gql } from 'apollo-boost'
import logo from './logo.svg'
import { useQuery } from '@apollo/react-hooks'

import Pages from './pages'

const HELLO = gql`
  {
    helloWorld
  }
`

const App = () => {
  const hi = useQuery(HELLO)
  return (
    <div className="App">
      {hi?.data?.helloWorld}
      <Pages />
    </div>
  )
}

export default App
