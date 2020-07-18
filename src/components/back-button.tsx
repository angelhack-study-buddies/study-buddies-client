import React from 'react'
import { RouteComponentProps, navigate } from '@reach/router'
import { Button } from 'react-materialize'

interface BackButtonProps extends RouteComponentProps {}

const BackButton: React.FC<BackButtonProps> = () => {
    return (
      <div style={{
        position: 'absolute', top: 8, left: 8,
      }}>
        <Button 
          className="backBtn"
          icon={<i className="material-icons">chevron_left</i>}
          onClick={() => navigate(-1)} />
      </div>
    )
}

export default BackButton