import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface ProfilesProps extends RouteComponentProps {}

const Profiles: React.FC<ProfilesProps> = (props) => {
  return (
    <div>{props.children}</div>
  )
}

export default Profiles