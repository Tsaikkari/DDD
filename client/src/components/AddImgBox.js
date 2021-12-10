import React, { useState, useContext } from 'react'
import { Form, Image } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'

const AddImgBox = ({ addBox, setAddBox, refreshImgBoxes }) => {
  const [imgPath, setImgPath] = useState('')
  const [text, setText] = useState('')

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setAddBox(!addBox)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      }

      const newImgBox = { imgPath, text, user }

      await axios.post('/api/imgboxes', newImgBox, config)
      setImgPath('')
      setText('')
      refreshImgBoxes()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title' className='mb-3'>
        <Form.Label>Choose Image</Form.Label>
        <Form.Control
          accept='image/*'
          type='file'
          value={imgPath}
          id='image'
          name='image'
          onChange={(e) => setImgPath(e.currentTarget)}
        />
        <Image
          style={{ position: 'absolute', top: '-110px' }}
          id='previwImage'
          src='#'
          alt='visionboard-img'
          width='400px'
          height='400px'
        />
      </Form.Group>
      <Form.Group controlId='text' className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Add text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}

export default AddImgBox
