import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

import { AuthContext } from '../context/auth'

export default function AddVideo(props) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [id, setId] = useState('')

  const { user } = useContext(AuthContext)
  console.log(user, 'user')

  const storedToken = localStorage.getItem('authToken')

  useEffect(() => {
    axios
      .get(`/api/users/`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const profileUser = response.data.find((x) => x._id === user._id)
        const { _id } = profileUser
        setId(profileUser)
        console.log(profileUser, 'profileUser')
      })
      .catch((err) => console.log(err))
  }, [])

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
      const video = { title, url, id }
      await axios.post('/api/videos', video)
      setTitle('')
      setUrl('')
      // this triggers a function in VideoList
      props.refreshVideos()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Add a Video</h1>
      <Form onSubmit={handleSubmit} inline>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='url'>
          <Form.Label>YouTube Video URL</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter URL'
            value={url}
            onChange={handleUrl}
          ></Form.Control>
        </Form.Group>
        <Button type='submit'>Add Video</Button>
      </Form>
    </>
  )
}
