import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Main from './main'
import Profiles from './profiles'
import Profile from './profile'
import AddContent from './add-content'
import FollowList from '../components/follow-list'

export default function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Main default />
        <Profiles path="/profile">
          <Profile path=":id" />
        </Profiles>
        <AddContent path="/add" />
        <FollowList path="/user/:userid/:target" />
      </Router>
    </Fragment>
  )
}
