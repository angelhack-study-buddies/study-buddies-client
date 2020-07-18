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
    }
  }
`

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  const { data } = useQuery(CURRENT_USER)
  const currentUser = data?.currentUser
  return (
    <Fragment>
      <dl style={{marginTop: 20}}>
        <Row>
          <Col s={4}>
            <ProfileImage currentUser={currentUser} />
          </Col>
          <Col s={8}>
            {currentUser ? <Follow following={99} followers={99} /> : null}
          </Col>
        </Row>
      </dl>
      <Recommendations />
      <Favorites />
      main
    </Fragment>
  )
}

export default Main