import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Button, Row, Col } from 'react-materialize'

import Recommendations from '../components/recommendations';
import Favorites from '../components/favorites';
import Follow from '../components/follow';

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Fragment>
      <Row>
        <Col s={4}>
          <Button
            floating
            icon={<img src="https://avatars2.githubusercontent.com/u/53922851?s=64" />}
            onClick={() => navigate('/profile')}
            large
            node="button"
            waves="light"
          />
        </Col>
        <Col s={8}>
          <Follow following={100} followers={100} />
        </Col>
      </Row>
      <Recommendations />
      <Favorites />
      main
    </Fragment>
  )
}

export default Main