import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Row, Col, Button } from 'react-materialize'

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  const props = {
    following: 100,
    followers: 100,
    streak: 30,
  }

  return (
    <Fragment>
      <Row>
        <Col m={12} s={6}>
          <span>
            <b>following</b>
          </span>
          <span>{props.following}</span>&nbsp;
          <span>
            <b>followers</b>
          </span>
          <span>{props.followers}</span>
        </Col>
      </Row>
      <div className="Streak">
        <Row>
          <b>Streak</b>
        </Row>
        <Row>{props.streak} day(s)</Row>
      </div>
      <div className="week">
        <Col m={12} s={6}>
          <Button floating large node="button" waves="light">
            S
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            M
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            T
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            W
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            T
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            F
          </Button>
          &nbsp;&nbsp;
          <Button floating large node="button" waves="light">
            S
          </Button>
          &nbsp;&nbsp;
        </Col>
      </div>
    </Fragment>
  )
}

export default Profile
