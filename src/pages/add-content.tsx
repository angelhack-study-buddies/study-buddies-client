import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { TextInput, Button } from 'react-materialize'

interface AddContentProps extends RouteComponentProps {}

const AddContent: React.FC<AddContentProps> = () => {
  return (
    <Fragment>
      <TextInput id="url" label="url" />
      <TextInput id="tags" label="tags" />
      <Button>Save</Button>
    </Fragment>
  )
}

export default AddContent
