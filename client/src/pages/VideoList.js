import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from '../components/Message'
import Video from '../components/Video'
import AddVideo from '../components/AddVideo'

// TODO: add error msg, loading, styling and get all videos btn
const VideoList = () => {
  const [videos, setVideos] = useState([])
  const [query, setQuery] = useState('')

  const storedToken = localStorage.getItem('authToken')

  const handleSearch = async (e) => {
    try {
      e.preventDefault()
      setQuery((q) => (q = query))

      const response = await axios.get(
        `/api/videos/user-videos?title=${query}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )

      setVideos(
        response.data.filter((video) =>
          video.title.toLowerCase().includes(query.toLowerCase())
        )
      )
      setQuery('')
    } catch (err) {
      console.log(err)
    }
  }

  const getVideos = (e) => {
    if (query) {
      handleSearch(e)
    } else {
      axios
        .get(`/api/videos/user-videos`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          console.log(response)
          setVideos(response.data)
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    getVideos()
    //eslint-disable-next-line
  }, [])

  return (
    <div className='video-container'>
      <Row>
        <Col>
          <AddVideo refreshVideos={getVideos} videos={videos} />
        </Col>
        <Col>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId='title'>
              <Form.Control
                type='text'
                placeholder='Search video by its title...'
                value={query}
                name='title'
                onChange={(e) => setQuery(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit'>Search</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {videos.map((video) => (
          <Col key={video._id}>
            <Video title={video.title} url={video.url} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default VideoList
