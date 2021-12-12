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
      {/* {props.boxes.length === 0 && (
        <div className='vision-board-instructions'>
          <h1>Create Vision Boards</h1>
          <p>Instructions here</p>
        </div>
      )} */}

      <p>{props.board && props.board.title}</p>
      <Row className='img-box-area'>
        {props.boxes &&
          props.boxes.map((box) => (
            <Col className='img-box-col' key={box._id}>
              <ImgBox box={box} boxes={props.boxes} setBoxes={props.setBoxes} />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default VisionBoard
