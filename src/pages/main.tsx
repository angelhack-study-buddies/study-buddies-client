import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Row, Col } from 'react-materialize'

import Recommendations from '../components/recommendations'
import Follow from '../components/follow'
import ProfileImage from '../components/profile-image'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      name
      profileURL
      consecutiveStudyDays
      recommendations {
        id
        author {
          id
          name
          email
          profileURL
        }
        url
        isLiked
        likeCount
        title
        description
        previewImage
        createdAt
      }
      followers {
        id
        name
        profileURL
      }
      followings {
        id
        name
        profileURL
      }
    }
  }
`

interface MainProps extends RouteComponentProps {}

const Main: React.FC<MainProps> = () => {
  const { data, loading, error } = useQuery(CURRENT_USER)
  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }
  if (error) return null
  const currentUser = data?.currentUser
  const following = currentUser?.followings.length || 0
  const followers = currentUser?.followers.length || 0
  return (
    <Fragment>
      <dl style={{marginTop: 20}}>
        <Row>
          <Col s={4}>
            <ProfileImage user={currentUser} />
          </Col>
          <Col s={8}>
            {currentUser
              ? <Follow
                userid={currentUser.id}
                following={following}
                followers={followers} />
              : null}
          </Col>
        </Row>
      </dl>
      <Recommendations items={currentUser?.recommendations} />
      {/* <Favorites /> */}
    </Fragment>
  )
}

export default Main