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
  query currentUser {
    currentUser {
      id
      followers {
        id
      }
    }
  }
`

const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      profileURL
      consecutiveStudyDays
      posts {
        id
        author {
          id
          name
          email
          profileURL
        }
        url
        title
        description
        previewImage
        createdAt
      }
    }
  }
`

interface ProfileProps extends RouteComponentProps {
  id?: string
}

const Profile: React.FC<ProfileProps> = (props) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState(-1)
  const { data } = useQuery(CURRENT_USER)
  const currentUser = data?.currentUser

  const { data: userData } = useQuery(USER, { variables: { id: props.id } })
  const user = userData?.user

  const streak = user?.consecutiveStudyDays?.length || 0
  let dotw = -1
  if (user?.consecutiveStudyDays) {
    const lastDay = new Date(user.consecutiveStudyDays[user.consecutiveStudyDays.length - 1]);
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
              <ProfileImage user={user} />
              {currentUser?.id !== user?.id ? <span style={{position: "relative", top: -20, left: 40, zIndex: 1}}>
                {currentUser?.followers.includes(user?.id) ? <Icon>add_circle</Icon> : <Icon>add_circle_outline</Icon>}
              </span> : null}
            </Col>
            <Col s={8}>
              {user ? <Follow following={user.followings?.length || 0} followers={user.followers?.length || 0} /> : null}
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
          <Button className={dotw >= 0 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(0)} floating small node="button" waves="light">S</Button>&nbsp;&nbsp;
          <Button className={dotw >= 1 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(1)} floating small node="button" waves="light">M</Button>&nbsp;&nbsp;
          <Button className={dotw >= 2 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(2)} floating small node="button" waves="light">T</Button>&nbsp;&nbsp;
          <Button className={dotw >= 3 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(3)} floating small node="button" waves="light">W</Button>&nbsp;&nbsp;
          <Button className={dotw >= 4 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(4)} floating small node="button" waves="light">T</Button>&nbsp;&nbsp;
          <Button className={dotw >= 5 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(5)} floating small node="button" waves="light">F</Button>&nbsp;&nbsp;
          <Button className={dotw >= 6 ? '' : 'disabled'} onClick={() => setDayOfTheWeek(6)} floating small node="button" waves="light">S</Button>&nbsp;&nbsp;
        </Col>
      </div>
      {currentUser?.id === user?.id ? <Button
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
      </Button> : null}
      {user ? <Posts user={user} dayOfTheWeek={dayOfTheWeek} /> : null}
    </Fragment>
  )
}

export default Profile