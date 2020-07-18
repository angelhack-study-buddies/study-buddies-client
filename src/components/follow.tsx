import { RouteComponentProps } from "@reach/router"

import React, { Fragment } from 'react'
import './follow.css'
import { Row, Col } from "react-materialize"

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
      <dl className="follow">
        <Col>
          <Row><span><b>{props.following}</b></span></Row>
          <Row><span style={spanStyle}><b>Following</b></span></Row>
        </Col>
        <Col>
          <Row><span><b>{props.followers}</b></span></Row>
          <Row><span style={spanStyle}><b>Followers</b></span></Row>
        </Col>
      </dl>
    </Fragment>
  )
}

export default Follow