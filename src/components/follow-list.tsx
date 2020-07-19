import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Col, Row } from 'react-materialize'
import { User } from '../generated/graphql'
import ProfileImage from './profile-image'

import './list.css'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Follow from './follow'
import BackButton from './back-button'

interface FollowListProps extends RouteComponentProps {
  userid?: string
  target?: string
}

const FollowList: React.FC<FollowListProps> = (props) => {
  const { data } = useQuery(gql`
    query FollowList_User($userid: ID!) {
      user(id: $userid) {
        followers {
          id
          name
          profileURL
          followings {
            id
          }
          followers {
            id
          }
        }
        followings {
          id
          name
          profileURL
          followings {
            id
          }
          followers {
            id
          }
        }
      }
    }
  `, {
    variables: {
      userid: props.userid,
    }
  })
  const currentUser = data?.user
  const following = currentUser?.followings
  const followers = currentUser?.followers
  const users: [User] = props?.target === 'following' ? following : followers
  return (
    <dl className="users">
      <BackButton />
      {users?.map(user => (
        <Fragment key={user.id}>
          <Row>
            <Col m={6}>
              <ProfileImage user={user} />
            </Col>
            <Col>
              {user.name}
              <Follow
                userid={user.id}
                following={user.followings.length || 0}
                followers={user.followers.length || 0}
              />
            </Col>
          </Row>
        </Fragment>
      ))}
    </dl>
  )
}

export default FollowList