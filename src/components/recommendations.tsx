import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import './list.css'
import { Post } from '../generated/graphql'

interface RecommendationsProps extends RouteComponentProps {
  items: [Post]
}

const Recommendations: React.FC<RecommendationsProps> = (props) => {
  return (
    <dl className="recommendations">
      <h5>Recommendations</h5>
      {props.items?.map(item => (
        <Fragment key={item.id}>
          <Col m={6}>
            <Card 
              actions={[
                <Button key={item.id} onClick={() => navigate(item.url!)}>Go To</Button>,
              ]}
              header={
                <Fragment>
                  <CardTitle image={item.previewImage!} />
                  <div className="icons">
                    <span onClick={() => navigate(`/profile/${item.author?.id}`)}><Icon>account_circle</Icon></span>
                    <span onClick={() => alert('like!')}><Icon>favorite_border</Icon></span>
                  </div>
                </Fragment>
              }
            >
              <p>{item.title}</p>
            </Card>
          </Col>
        </Fragment>
      ))}
    </dl>
  )
}

export default Recommendations