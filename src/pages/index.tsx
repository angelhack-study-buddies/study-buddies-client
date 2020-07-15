import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Main from './main';
import Profile from './profile';

export default function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Main default />
        <Profile path="/profile" />
      </Router>
    </Fragment>
  );
}
