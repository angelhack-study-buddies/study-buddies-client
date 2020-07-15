import './App.css';

import React from 'react';
import { gql } from 'apollo-boost';
import logo from './logo.svg';
import { useQuery } from '@apollo/react-hooks';

const HELLO = gql`
  {
    helloWorld
  }
`;



const App = () => {
  const hi = useQuery(HELLO);
  return (
    <div className="App">
      <header className="App-header">
        {hi?.data?.helloWorld}
      </header>
    </div>
  );
}

export default App;
