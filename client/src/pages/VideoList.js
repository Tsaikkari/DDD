import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from '../components/Message'
import Video from '../components/Video'
import AddVideo from '../components/AddVideo'
import YouTube from '../components/YouTube'

// TODO: add error msg, loading
const VideoList = () => {
  const [videos, setVideos] = useState([])
  const [query, setQuery] = useState('')
  const [queryterm, setQueryTerm] = useState('')
  const [showAll, setShowAll] = useState(true)

  const storedToken = localStorage.getItem('authToken')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`/api/youtube/video?search=${queryterm}`)
      console.log(response, 'YOUTUBEVIDEO')
    } catch (err) {
      console.log(err)
    }
  }

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
      setShowAll(!showAll)
    } catch (err) {
      console.log(err)
    }
    if (e && !showAll) {
      getVideos()
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
        <Col md={6}>
          <AddVideo refreshVideos={getVideos} videos={videos} />
        </Col>
        <Col md={3}>
          <YouTube
            handleSubmit={handleSubmit}
            queryterm={queryterm}
            setQueryTerm={setQueryTerm}
          />
        </Col>
        <Col md={3}>
          <Form onSubmit={handleSearch} className='video-search'>
            <Form.Group controlId='title'>
              <Form.Control
                type='text'
                placeholder='Search from your videos'
                value={query}
                name='title'
                onChange={(e) => setQuery(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button className='search-btn' type='submit'>
              {showAll ? 'Search' : 'All Videos'}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {videos.map((video) => (
          <Col key={video._id} sm={12} md={6} lg={4} xl={4}>
            <Video
              title={video.title}
              url={video.url}
              refreshVideos={getVideos}
              id={video._id}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default VideoList
