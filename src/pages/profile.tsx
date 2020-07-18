import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Row, Col, Button, Icon } from 'react-materialize'
import Follow from '../components/follow'
import LogoutButton from '../components/logout-button'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import './profile.css'
import ProfileImage from '../components/profile-image'
import BackButton from '../components/back-button'

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      name
      profileURL
      consecutiveStudyDays
    }
  }
`

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { data } = useQuery(CURRENT_USER)
  const currentUser = data?.currentUser
  const streak = currentUser?.consecutiveStudyDays?.length || 5
  return (
    <Fragment>
      <BackButton />
      <dl style={{marginTop: 20}}>
        <Row>
          <Row>
            <Col s={4}>
              <ProfileImage currentUser={currentUser} />
            </Col>
            <Col s={8}>
              {currentUser ? <Follow following={99} followers={99} /> : null}
            </Col>
          </Row>
        </Row>
      </dl>
      <Row>
        <LogoutButton />
      </Row>
      <hr style={{ height: 12, backgroundColor: '#F2F3F6', borderStyle: 'none' }} />
      <div className="streak">
        <Row>
          <p>Streak</p>
        </Row>
        <Row className="days">{streak!} Day(s)</Row>
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
          <Button className="disabled" floating small node="button" waves="light">
            F
          </Button>
          &nbsp;&nbsp;
          <Button className="disabled" floating small node="button" waves="light">
            S
          </Button>
          &nbsp;&nbsp;
        </Col>
      </div>
      <Button
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