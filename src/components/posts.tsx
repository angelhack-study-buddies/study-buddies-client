import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import { Post } from '../generated/graphql'

import './list.css'

interface PostsProps extends RouteComponentProps {
  user: any
  dayOfTheWeek: number
}

const Posts: React.FC<PostsProps> = (props) => {
  let dPosts: [Post?] = []
  dPosts = props.user?.posts.filter((post: Post) => {
    const day = new Date(post.createdAt)
    return props.dayOfTheWeek === day.getDay();
  })
  
  return (
    <dl className="posts">
      {dPosts?.map((post?: Post) => (
        !post ? null :
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