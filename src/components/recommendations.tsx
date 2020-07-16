import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Col, Card, Icon, CardTitle } from 'react-materialize'

interface RecommendationsProps extends RouteComponentProps {}

const Recommendations: React.FC<RecommendationsProps> = () => {
  const item = {
    title: 'Brute-Force',
    image: 'https://app.gitbook.com/share/space/thumbnail/-M6ivT9AfNVmiT1Q6B2U.png',
    url: 'https://chloe-codes1.gitbook.io/til/algorithm/algorithm101/01_brute-force',
  }
  return (
    <dl>
      <h5 style={{textAlign: 'left', marginLeft: 8}}>recommendations</h5>
      {Array.from(Array(4).keys()).map(n => (
        <Fragment key={n}>
          <Col m={6}>
            <Card 
              actions={[
                <a key={n} href={item.url}>Go To</a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={item.image} />}
              horizontal
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