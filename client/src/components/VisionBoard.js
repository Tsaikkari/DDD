import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ImgBox from './ImgBox'

const VisionBoard = ({ title, boxes }) => {
  // add delete
  return (
    <div class='vision-board'>
      <Row class='img-box-area'>
        {boxes.map((box) => (
          <Col key={box._id}>
            <ImgBox box={box} />
          </Col>
        ))}
      </Row>
      <p>{title}</p>
    </div>
  )
}

export default VisionBoard
