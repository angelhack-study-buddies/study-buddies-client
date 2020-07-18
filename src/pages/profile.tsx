import React, { Fragment, useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Row, Col, Button, Icon } from 'react-materialize'
import Follow from '../components/follow'
import LogoutButton from '../components/logout-button'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import './profile.css'
import ProfileImage from '../components/profile-image'
import BackButton from '../components/back-button'
import Posts from '../components/posts'

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
  const [dayOfTheWeek, setDayOfTheWeek] = useState(-1)
  const { data } = useQuery(CURRENT_USER)
  const currentUser = data?.currentUser
  const streak = currentUser?.consecutiveStudyDays?.length || 0
  let dotw = -1
  if (currentUser?.consecutiveStudyDays) {
    const lastDay = new Date(currentUser.consecutiveStudyDays);
    dotw = lastDay.getDay();
    // Sunday - Saturday : 0 - 6
  }

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
              {currentUser ? <Follow following={currentUser.followings?.length || 0} followers={currentUser.followers?.length || 0} /> : null}
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
          <Button className={dotw === 0 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(0)} floating small node="button" waves="light">S</Button>&nbsp;&nbsp;
          <Button className={dotw === 1 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(1)} floating small node="button" waves="light">M</Button>&nbsp;&nbsp;
          <Button className={dotw === 2 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(2)} floating small node="button" waves="light">T</Button>&nbsp;&nbsp;
          <Button className={dotw === 3 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(3)} floating small node="button" waves="light">W</Button>&nbsp;&nbsp;
          <Button className={dotw === 4 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(4)} floating small node="button" waves="light">T</Button>&nbsp;&nbsp;
          <Button className={dotw === 5 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(5)} floating small node="button" waves="light">F</Button>&nbsp;&nbsp;
          <Button className={dotw === 6 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(6)} floating small node="button" waves="light">S</Button>&nbsp;&nbsp;
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
      {currentUser ? <Posts user={currentUser} dayOfTheWeek={dayOfTheWeek} /> : null}
    </Fragment>
  )
}

export default Profile