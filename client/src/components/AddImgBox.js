import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Image, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import FormContainer from './FormContainer'

const AddImgBox = ({
  addBox,
  setAddBox,
  refreshImgBoxes,
  refreshVisionBoards,
}) => {
  const [imgPath, setImgPath] = useState('')
  const [text, setText] = useState('')

  const { user } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')

  const { id } = useParams()

  const onImage = (e) => {
    setImgPath(e.target.value)

    console.log('IMG PATHHHHHHHHHHHHH', e.target.value)
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

      const newImgBox = { imgPath, text, user, id }

      await axios.post('/api/imgboxes', newImgBox, config)
      setImgPath('')
      setText('')
      refreshVisionBoards()
      refreshImgBoxes()
      setAddBox(!addBox)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} enctype='multipart/form-data'>
        <Form.Group controlId='title' className='mb-3'>
          <Form.Label>Choose Image</Form.Label>
          <Form.Control
            accept='image/*'
            type='file'
            value={imgPath}
            id='image'
            name='image'
            //TODO: find out how to do this with reach
            //onChange={(e) => setImgPath(e.target.value)}
            onChange={onImage}
          />
          <Image
            id='previwImage'
            src='#'
            alt='visionboard-img'
            width='400px'
            height='400px'
          />
        </Form.Group>
        <Form.Group controlId='text' className='mb-3'>
          <Form.Control
            type='textarea'
            rows='5'
            placeholder='Add text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button className='save-img-btn' type='submit'>
          Add This Image to the Vision Board
        </Button>
      </Form>
    </FormContainer>
  )
}

export default AddImgBox
