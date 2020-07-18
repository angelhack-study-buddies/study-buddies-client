import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import { Post, User } from '../generated/graphql'
import gql from 'graphql-tag'

import './list.css'
import { useQuery } from '@apollo/react-hooks'

const POSTS = gql`
  query userPosts($id: ID!) {
    user(id: $id) {
      posts {
        id
        author {
          id
          name
          email
          profileURL
        }
        url
        title
        description
        previewImage
        createdAt
      }
    }
  }
`

interface PostsProps extends RouteComponentProps {
  user: User
  dayOfTheWeek: number
}

const Posts: React.FC<PostsProps> = (props) => {
  const user = props?.user

  let dPosts = undefined
  const { data } = useQuery(POSTS, {
    variables: { id: user?.id }
  })
  dPosts = data?.user?.posts.filter((post: Post) => {
    const day = new Date(post.createdAt)
    return props.dayOfTheWeek === day.getDay();
  })
  
  return (
    <dl className="posts">
      {dPosts?.map((post: Post) => (
        <Fragment key={post.id}>
          <Col m={6}>
            <Card 
              actions={[
                <Button key={post.id} onClick={() => navigate(post.url!)}>Go To</Button>,
              ]}
              header={
                <Fragment>
                  <div
                    onClick={() => alert('like!')}
                    style={{position: 'absolute', right: 32, top: 156, zIndex: 1}}>
                    <Icon>favorite_border</Icon>
                  </div>
                  <CardTitle image={post.previewImage!} />
                </Fragment>
              }
            >
              <p>{post.title}<br />{post.description}</p>
            </Card>
          </Col>
        </Fragment>
      ))}
    </dl>
  )
}

export default Posts