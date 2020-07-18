import React from 'react'
import { Button } from 'react-materialize'
import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'

import './logout-button.css';

const LogoutButton = () => {
  const client = useApolloClient()
  return (
    <Button className="LogoutButton" onClick={() => {
      client.writeData({ data: { currentUser: undefined } })
      localStorage.clear()

      navigate(`${process.env.REACT_APP_SERVER_BASE_URL}/logout`)
    }}>Logout
    </Button>
  )
}

export default LogoutButton