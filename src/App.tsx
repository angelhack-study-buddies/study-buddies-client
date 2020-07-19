import './App.css'

import React from 'react'
import logo from './logo.svg'
import Pages from './pages'

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Pages />
    </div>
  )
}

export default App