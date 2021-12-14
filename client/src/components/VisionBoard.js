import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ImgBox from './ImgBox'

const VisionBoard = ({ title, images }) => {
  return (
    <div className='vision-board'>
      <p className='vision-board-title'>{title}</p>
      <Row>
        {images.map((image) => (
          <Col key={image._id} sm={12} md={6} lg={4} xl={3}>
            <ImgBox imgPath={image.imgPath} text={image.text} id={image._id} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default VisionBoard
