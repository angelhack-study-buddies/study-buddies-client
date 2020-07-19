import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Row, Col } from 'react-materialize'

import Recommendations from '../components/recommendations'
import Favorites from '../components/favorites'
import Follow from '../components/follow'
import ProfileImage from '../components/profile-image'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      name
      profileURL
      consecutiveStudyDays
      followers {
        id
        name
        profileURL
      }
      followings {
        id
        name
        profileURL
      }
    }
  }
`

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  const { data } = useQuery(CURRENT_USER)
  const currentUser = data?.currentUser
  const following = currentUser?.followings.length || 0
  const followers = currentUser?.followers.length || 0
  return (
    <Fragment>
      <dl style={{marginTop: 20}}>
        <Row>
          <Col s={4}>
            <ProfileImage user={currentUser} />
          </Col>
          <Col s={8}>
            {currentUser ? <Follow following={following} followers={followers} /> : null}
          </Col>
        </Row>
      </dl>
      <Recommendations />
      <Favorites />
    </Fragment>
  )
}

export default Main