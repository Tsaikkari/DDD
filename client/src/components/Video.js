import axios from 'axios'
import React from 'react'
import Draggable from 'react-draggable'
import { Card } from 'react-bootstrap'
import { config } from '../reqHeaders'

const Video = ({ title, url, id, refreshVideos }) => {
  const deleteVideo = async (id) => {
    if (window.confirm('Delete this video?')) {
      try {
        await axios.delete(`/api/videos/${id}`, config)
        refreshVideos()
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <Draggable>
      <Card className='video-card'>
        <iframe title={title} width='477' height='315' src={url}></iframe>
        <div className='text-trash video'>
          <p className='video-title'>{title}</p>
          <p
            className='delete'
            onClick={() => {
              deleteVideo(id)
            }}
          >
            {' '}
            *
          </p>
        </div>
      </Card>
    </Draggable>
  )
}

export default Video
