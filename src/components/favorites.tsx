import React, { Fragment } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { Col, Card, Icon, CardTitle, Button  } from 'react-materialize'
import './list.css'

interface FavoritesProps extends RouteComponentProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  const item = {
    title: 'Brute-Force',
    image: 'https://app.gitbook.com/share/space/thumbnail/-M6ivT9AfNVmiT1Q6B2U.png',
    url: 'https://chloe-codes1.gitbook.io/til/algorithm/algorithm101/01_brute-force',
  }
  return (
    <dl className="favorites">
      <h5>Favorites</h5>
      {Array.from(Array(4).keys()).map(n => (
        <Fragment key={n}>
          <Col m={6}>
            <Card 
              actions={[
                <Button key={n} onClick={() => navigate(item.url)}>Go To</Button>,
              ]}
              header={
                <Fragment>
                  <div
                    onClick={() => alert('like!')}
                    style={{position: 'absolute', right: 32, top: 156, zIndex: 1}}>
                    <Icon>favorite_border</Icon>
                  </div>
                  <CardTitle image={item.image} />
                </Fragment>
              }
            >
              {item.title}
            </Card>
          </Col>
        </Fragment>
      ))}
    </dl>
  )
}

export default Favorites