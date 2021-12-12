import React from 'react'
import Draggable from 'react-draggable'

const Video = ({ title, url }) => {
  return (
    <Draggable>
      <div>
        <iframe title={title} width='477' height='315' src={url}></iframe>
        <p className='video-title'>{title}</p>
      </div>
    </Draggable>
  )
}

export default Video
