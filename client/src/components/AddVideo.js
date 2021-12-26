import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

import { AuthContext } from '../context/auth'

export default function AddVideo(props) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const handleUrl = (event) => {
    setUrl((url) => (url = event.target.value))
    const replace = 'embed/'
    const arrUrl = event.target.value.split('watch?v=')
    const newStr = arrUrl[0] + replace + arrUrl[1]
    setUrl(newStr)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      }
      const video = { title, url, user }
      await axios.post('/api/videos', video, config)
      setTitle('')
      setUrl('')
      props.refreshVideos()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add-video-container'>
      <h4 className='add-video-header'>Add a Video</h4>
      <Form onSubmit={handleSubmit} className='video-form'>
        <Form.Group controlId='title' className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Give a title for the video'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='url' className='mb-3 url-input'>
          <Form.Control
            type='text'
            placeholder='Enter YouTube Video URL'
            value={url}
            onChange={handleUrl}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button type='submit' className='save-btn add-video-btn'>
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
