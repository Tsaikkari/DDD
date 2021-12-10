import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Message from '../components/Message'
import Video from '../components/Video'
import AddVideo from '../components/AddVideo'
import SearchBox from '../components/SearchBox'

const VideoList = () => {
  const [videos, setVideos] = useState([])

  const storedToken = localStorage.getItem('authToken')

  const getVideos = () => {
    axios
      .get('/api/videos/user-videos', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setVideos(response.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className='video-container'>
      <Row>
        <Col>
          <AddVideo refreshVideos={getVideos} videos={videos} />
        </Col>
        <Col>
          <SearchBox videos={videos} />
        </Col>
      </Row>
      <Row>
        {videos.map((video) => (
          <Col key={video._id}>
            <Video key={video._id} title={video.title} url={video.url} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default VideoList
