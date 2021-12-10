import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'

const AddBoard = ({
  addBoard,
  setAddBoard,
  addNewBoard,
  refreshVisions,
  boxes,
}) => {
  const [board, setBoard] = useState({ title: '', images: boxes })

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const handleAddBoard = (e) => {
    e.preventDefault()
    addNewBoard(board)
    setAddBoard(!addBoard)
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
      const visionBoard = { title: board.title, images: board.images, user }
      await axios.post('/api/visions', visionBoard, config)
      setBoard(null)
      refreshVisions()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {board.images.length === 0 ? (
        <Form onSubmit={handleAddBoard}>
          <Form.Group controlId='title' className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Give a title for the vision board'
              value={board.title}
              onChange={(e) => setBoard(e.target.value)}
            />
          </Form.Group>
          <Button type='submit'>Add Vision Board</Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='title' className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Give a title for the vision board'
              value={board.title}
              onChange={(e) => setBoard(e.target.value)}
            />
          </Form.Group>
          TODO: loop over boxes
          <Button type='submit'>Save</Button>
        </Form>
      )}
    </>
  )
}

export default AddBoard
