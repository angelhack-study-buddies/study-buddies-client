import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Row, Col } from 'react-materialize'

import Recommendations from '../components/recommendations';
import Favorites from '../components/favorites';
import Follow from '../components/follow';
import ProfileImage from '../components/profile-image';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn
  }
`

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  const { data } = useQuery(IS_LOGGED_IN)
  const isLoggedIn = data && data.isLoggedIn
  return (
    <Fragment>
      <Row>
        <Col s={4}>
          <ProfileImage isLoggedIn={isLoggedIn} />
        </Col>
        <Col s={8}>
          {isLoggedIn ? <Follow following={100} followers={100} /> : null}
        </Col>
      </Row>
      <Recommendations />
      <Favorites />
      main
    </Fragment>
  )
}

export default Main