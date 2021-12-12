import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import ImgBox from './ImgBox'

const ImgBoxArea = (props) => {
  return (
    <Row className='img-box-area'>
      {props.boxes &&
        props.boxes.map((box) => (
          <>
            <Col className='img-box-col' key={box._id}>
              <ImgBox box={box} boxes={props.boxes} setBoxes={props.setBoxes} />
            </Col>
          </>
        ))}
    </Row>
  )
}

export default ImgBoxArea
