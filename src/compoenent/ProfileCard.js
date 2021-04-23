import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileCard = ({users}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{users.name}</Card.Title>
    <Card.Text>
      <h3>Info: </h3> <h5>{users.email} ,{users.address}</h5>
    </Card.Text>
    <Button variant="primary"><Link to={`/info/${users.id}`}>{`${users.name} Info`}</Link></Button>
  </Card.Body>
</Card> 
        </div>
    )
}

export default ProfileCard
