import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
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
      .get('/api/videos', {
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
      <AddVideo refreshVideos={getVideos} />
      <SearchBox videos={videos} />
      {videos.map((video) => (
        <Video key={video._id} title={video.title} url={video.url} />
      ))}
    </div>
  )
}

export default VideoList
