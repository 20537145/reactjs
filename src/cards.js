import React from 'react'
import { Card } from 'react-bootstrap'

function Cards({e}) {
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.imgUrl} alt='' width={'320px'} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
       
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards