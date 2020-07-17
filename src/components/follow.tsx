import { RouteComponentProps } from "@reach/router"

import React, { Fragment } from 'react'
import './follow.css'

const spanStyle = {
  color: 'gray',
}

interface FollowProps extends RouteComponentProps {
  following: number,
  followers: number,
}

const Follow: React.FC<FollowProps> = (props) => {
  return (
    <Fragment>
      <span style={spanStyle}><b>following</b></span>
      <span><b>{props.following}</b></span>
      <span style={spanStyle}><b>followers</b></span>
      <span><b>{props.followers}</b></span>
    </Fragment>
  )
}

export default Follow