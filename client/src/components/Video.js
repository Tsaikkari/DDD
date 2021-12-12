import React from 'react'
import Draggable from 'react-draggable'
import { Card } from 'react-bootstrap'

const Video = ({ title, url }) => {
  return (
    <Draggable>
      <Card className='img-card'>
        <iframe title={title} width='477' height='315' src={url}></iframe>
      </Card>
    </Draggable>
  )
}

export default Video
