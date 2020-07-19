import React, { Fragment, useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Card, Icon, CardTitle, Button  } from 'react-materialize'

import { Post } from '../generated/graphql'

interface PostCardProps extends RouteComponentProps {
    item: Post
    liked?: boolean
  }

const PostCard: React.FC<PostCardProps> = (props) => {
  const item = props.item
  const [liked, setLiked] = useState({isLiked: item.isLiked, likeCount: item.likeCount})
  
  return (
    <Card 
      actions={[
        <Button key={item.id} onClick={() => navigate(item.url!)}>Go To</Button>,
      ]}
      header={
        <Fragment>
          <CardTitle image={item.previewImage!} />
          <div className="icons">
            <span onClick={() => navigate(`/profile/${item.author?.id}`)}>
              <Icon>account_circle</Icon>
            </span>
            <span onClick={() => {
              setLiked({
                isLiked: !liked.isLiked,
                likeCount: !liked.isLiked ? (item.likeCount || 0) + 1 : item.likeCount})
            }}>
              {liked.isLiked ? <Icon>favorite</Icon> : <Icon>favorite_border</Icon>}{liked.likeCount}
            </span>
          </div>
        </Fragment>
      }
    >
      <p>{item.title}</p>
    </Card>
  )
}

export default PostCard