import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddVisionBoard = ({ addVisionBoard, setAddVisionBoard, addBoard }) => {
  const [visionBoard, setVisionBoard] = useState({ title: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBoard(visionBoard)
    setAddVisionBoard(!addVisionBoard)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title' className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Give a title for the vision board'
          value={visionBoard.title}
          onChange={(e) => setVisionBoard(e.target.value)}
        />
      </Form.Group>
      <Button type='submit'>Add Vision Board</Button>
    </Form>
  )
}

export default AddVisionBoard
