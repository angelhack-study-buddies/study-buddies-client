import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Button } from 'react-materialize'

import Recommendations from '../components/recommendations';
import Favorites from '../components/favorites';

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Fragment>
      <Button
        floating
        icon={<img src="https://avatars2.githubusercontent.com/u/53922851?s=64" />}
        onClick={() => navigate('/profile')}
        large
        node="button"
        waves="light"
      />
      <Recommendations />
      <Favorites />
      main
    </Fragment>
  )
}

export default Main