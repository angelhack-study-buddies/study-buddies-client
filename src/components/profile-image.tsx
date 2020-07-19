import React from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Button } from 'react-materialize'

import avatar from './avatar-person.svg'
import { User } from '../generated/graphql'

interface ProfileImageProps extends RouteComponentProps {
  user: User
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  const { user } = props
  const profileURL = user?.profileURL
  return (
    props.user
      ? <Button
          icon={<img width={92} src={profileURL!} alt="avatar" />}
          onClick={() => navigate(`/profile/${user?.id}`)}
          floating
          large
          node="button"
          waves="light"
        />
      : <Button
          icon={<img src={avatar} alt="avatar" />}
          onClick={() => {
            navigate(`${process.env.REACT_APP_SERVER_BASE_URL}/login`)
          }}
          floating
          large
          node="button"
          waves="light"
        />
  )
}

export default ProfileImage