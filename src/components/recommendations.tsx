import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import '../App.css'

interface RecommendationsProps extends RouteComponentProps {}

const Recommendations: React.FC<RecommendationsProps> = () => {
  const item = {
    title: 'Brute-Force',
    image: 'https://app.gitbook.com/share/space/thumbnail/-M6ivT9AfNVmiT1Q6B2U.png',
    url: 'https://chloe-codes1.gitbook.io/til/algorithm/algorithm101/01_brute-force',
  }
  return (
    <dl>
      <h5>Recommendations</h5>
      {Array.from(Array(4).keys()).map(n => (
        <Fragment key={n}>
          <Col m={6}>
            <Card 
              actions={[
                <Button key={n} onClick={() => navigate(item.url)}>Go To</Button>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={item.image} />}
              revealIcon={<Icon>more_vert</Icon>}
            >
              {item.title}
            </Card>
          </Col>
        </Fragment>
      ))}
    </dl>
  )
}

export default Recommendations