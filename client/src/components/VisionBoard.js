import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import ImgBox from './ImgBox'

const VisionBoard = ({ title, boxes }) => {
  // add delete axios.post('/api/visions', newBoard, config),
  // const newBoard = { title: 'Vision Board' }
  const handleBoard = () => {}
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
      <Button onClick={handleBoard}>Save</Button>
    </div>
  )
}

export default VisionBoard
