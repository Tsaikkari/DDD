import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'

import ImgBox from './ImgBox'
import { AuthContext } from '../context/auth'

const VisionBoard = (props) => {
  // add delete

  const { user } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')

  return (
    <div className='vision-board'>
      <div>
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
      </div>
    </div>
  )
}

export default VisionBoard
