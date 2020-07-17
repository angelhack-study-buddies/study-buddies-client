import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Row, Col, Button, Icon } from 'react-materialize'
import Follow from '../components/follow'
import LogoutButton from '../components/logout-button'

const imageStyle = {
  borderRadius: 64, verticalAlign: 'middle'
}

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  const props = {
    streak: 30,
  }

  return (
    <Fragment>
      <div style={{
        position: 'absolute', top: 0, left: 0,
      }}>
        <Button onClick={() => navigate(-1)}>&lt;</Button>
      </div>
      <Row>
        <Col m={12} s={6}>
          <img src={'https://avatars2.githubusercontent.com/u/53922851?s=128'} style={imageStyle} alt="avatar" />
          <Follow following={100} followers={100} />
        </Col>
      </Row>
      <Row>
        <LogoutButton />
      </Row>
      <div className="Streak">
        <Row>
          <b>Streak</b>
        </Row>
        <Row>{props.streak} day(s)</Row>
      </div>
      <div className="week">
        <Col m={12} s={6}>
          <Button floating small node="button" waves="light">
            S
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            M
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            T
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            W
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            T
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            F
          </Button>
          &nbsp;&nbsp;
          <Button floating small node="button" waves="light">
            S
          </Button>
          &nbsp;&nbsp;
        </Col>
      </div>
      <Button
        className="green"
        fab={{
          direction: 'top',
          toolbarEnabled: true
        }}
        floating
        icon={<Icon>+</Icon>}
        large
        node="button"
        onClick={() => navigate('/add')}
      >
      </Button>
    </Fragment>
  )
}

export default Profile