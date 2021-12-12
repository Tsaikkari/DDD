import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'

import ImgBoxArea from './ImgBoxArea'
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
      <ImgBoxArea boxes={props.boxes} />
    </div>
  )
}

export default VisionBoard
