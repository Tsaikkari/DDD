import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import FormContainer from './FormContainer'

const AddVisionBoard = (props) => {
  const [title, setTitle] = useState('')

  const { user } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')

  const handleBoardSubmit = async (e) => {
    e.preventDefault()

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      }

      const newBoard = { title, user }

      await axios.post('/api/visions', newBoard, config)
      setTitle('')
      props.refreshVisionBoards()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleBoardSubmit}>
        <Form.Group controlId='text' className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Give a title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button className='save-img-btn' type='submit'>
          Add Vision Board
        </Button>
      </Form>
    </FormContainer>
  )
}

export default AddVisionBoard
