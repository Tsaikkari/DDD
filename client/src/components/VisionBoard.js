import React, { useContext } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

import ImgBox from './ImgBox'
import { AuthContext } from '../context/auth'

const VisionBoard = (props) => {
  // add delete

  const { user } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')

  const handleBoard = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
      }

      const newBoard = { title: 'Vision Board', user }

      await axios.post('/api/visions', newBoard, config)
      props.refreshVisionBoards()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='vision-board'>
      <Form onSubmit={handleBoard}>
        {props.boxes.length === 0 && (
          <div className='vision-board-instructions'>
            <h1>Create Vision Boards</h1>
            <p>Instructions here</p>
          </div>
        )}
        <Row className='img-box-area'>
          {props.boxes.map((box) => (
            <Col key={box._id}>
              <ImgBox box={box} boxes={props.boxes} setBoxes={props.setBoxes} />
            </Col>
          ))}
        </Row>
        <p>{props.title}</p>
        {props.boxes.length > 0 && (
          <div>
            <p>Vision Board is finished?</p>
            <Button onClick={handleBoard}>Save Vision Board</Button>
          </div>
        )}
      </Form>
    </div>
  )
}

export default VisionBoard
