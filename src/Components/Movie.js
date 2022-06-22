import React from 'react'
import { Card,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Movie = ({movies}) => {

  return (
    <div>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies.posterUrl} />
      <Card.Body>
        <Card.Title> {movies.title} </Card.Title>
        <Card.Text>
          {movies.description}
        </Card.Text>
        <Link variant="primary" to={`/movie/${movies.id}`} >Trailer</Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Movie