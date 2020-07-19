import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import './list.css'

interface RecommendationsProps extends RouteComponentProps {}

const Recommendations: React.FC<RecommendationsProps> = () => {
  const item = {
    title: 'Brute-Force',
    image: 'https://app.gitbook.com/share/space/thumbnail/-M6ivT9AfNVmiT1Q6B2U.png',
    url: 'https://chloe-codes1.gitbook.io/til/algorithm/algorithm101/01_brute-force',
    authorID: '106261751045546485787',
  }
  return (
    <dl className="recommendations">
      <h5>Recommendations</h5>
      {Array.from(Array(4).keys()).map(n => (
        <Fragment key={n}>
          <Col m={6}>
            <Card 
              actions={[
                <Button key={n} onClick={() => navigate(item.url)}>Go To</Button>,
              ]}
              header={
                <Fragment>
                  <CardTitle image={item.image} />
                  <div className="icons">
                    <span onClick={() => navigate(`/profile/${item.authorID}`)}><Icon>account_circle</Icon></span>
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