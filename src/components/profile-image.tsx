import React from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Button } from 'react-materialize'

import avatar from './avatar-person.svg'
import { User } from '../generated/graphql'

interface ProfileImageProps extends RouteComponentProps {
  currentUser: User
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  const { currentUser } = props
  const profileURL = currentUser?.profileURL
  return (
    props.currentUser
      ? <Button
          icon={<img width={92} src={profileURL!} alt="avatar" />}
          onClick={() => navigate('/profile')}
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