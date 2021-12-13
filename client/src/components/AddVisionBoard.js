import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'

const AddVisionBoard = ({
  addBoard,
  setAddBoard,
  boards,
  refreshVisionBoards,
}) => {
  const [title, setTitle] = useState('')

  let navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      }
      const newBoard = { title, user }
      const res = await axios.post('/api/visions', newBoard, config)

      setTitle('')
      setAddBoard(!addBoard)
      refreshVisionBoards()

      // redirects to VisionBoardImages page
      navigate(`/visionboards/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='title' className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Give Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Save</Button>
      </Form>
    </>
  )
}

export default AddVisionBoard
