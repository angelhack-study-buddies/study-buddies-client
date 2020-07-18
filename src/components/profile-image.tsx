import React from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Button } from 'react-materialize'

import avatar from './avatar-person.svg'

interface ProfileImageProps extends RouteComponentProps {
  isLoggedIn: boolean
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  return (
    props.isLoggedIn
      ? <Button
          icon={<img src="https://avatars2.githubusercontent.com/u/53922851?s=64" alt="avatar" />}
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