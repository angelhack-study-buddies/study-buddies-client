import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Fragment>
      main
    </Fragment>
  );
}

export default Main;