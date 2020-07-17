import React from 'react'
import { Button } from 'react-materialize'
import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'

const LogoutButton = () => {
  const client = useApolloClient()
  return (
    <Button onClick={() => {
      client.writeData({ data: { isLoggedIn: false } })
      localStorage.clear()

      navigate(`${process.env.REACT_APP_SERVER_BASE_URL}/logout`)
    }}>Logout
    </Button>
  )
}

export default LogoutButton