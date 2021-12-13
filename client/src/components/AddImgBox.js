import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import FormContainer from './FormContainer'

const AddImgBox = ({
  addBox,
  setAddBox,
  refreshImgBoxes,
  refreshVisionBoards,
}) => {
  const [image, setImage] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const { user } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')

  const { id } = useParams()

  const onChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    console.log(image, 'IMAGE')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedToken}`,
      },
    }
    try {
      setLoading(true)
      const res = await axios.post('/api/imgboxes/upload', formData)
      console.log('responseFromServer', res)
      const imgPath = res.data.secure_url
      const newImgBox = { imgPath, text, user, id }
      await axios.post('/api/imgboxes', newImgBox, config)
      setLoading(false)
      setImage(newImgBox.imgPath)
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Choose Image</Form.Label>
          <Form.Control
            accept='image/*'
            type='file'
            // value={image}
            id='image'
            name='image'
            onChange={onChange}
          />
          {/* <div className='file-path-wrapper'>
            <Form.Control className='file-path validate' type='text' />
          </div> */}
          {/* <Image
            id='previwImage'
            src='#'
            alt='visionboard-img'
            width='400px'
            height='400px'
          /> */}
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
