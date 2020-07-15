import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';

import { Button } from 'react-materialize';
import { navigate } from '@reach/router';

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
      main
    </Fragment>
  );
}

export default Main;