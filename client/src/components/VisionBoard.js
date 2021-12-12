import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import ImgBox from './ImgBox'

const VisionBoard = ({ addBox, setAddBox, refreshImgBoxes, boxes }) => {
  // add delete

  let navigate = useNavigate()

  return (
    <div className='vision-board'>
      <div>
        {boxes.length === 0 && (
          <div className='vision-board-instructions'>
            <p>Instructions here</p>
          </div>
        )}
        <Row className='img-box-area'>
          <Col>
            {boxes.map((box) => (
              <ImgBox key={box._id} box={box} />
            ))}
          </Col>
        </Row>
        {/* <p>{title}</p> */}
      </div>
    </div>
  )
}

export default VisionBoard
