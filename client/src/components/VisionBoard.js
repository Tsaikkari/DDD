import React from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import ImgBox from './ImgBox'
import { config } from '../reqHeaders'

const VisionBoard = ({ title, images, id, refreshVisionBoards }) => {
  const deleteVisionBoard = async (id) => {
    if (window.confirm('Delete this vision board?')) {
      try {
        await axios.delete(`/api/visions/${id}`, config)
        refreshVisionBoards()
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className='vision-board'>
      <div className='text-trash'>
        <p className='vision-board-title'>{title}</p>
        <p
          className='delete'
          onClick={() => {
            deleteVisionBoard(id)
          }}
        >
          {' '}
          *
        </p>
      </div>
      <Row>
        {images.map((image) => (
          <Col key={image._id} sm={12} md={6} lg={4} xl={3}>
            <ImgBox
              imgPath={image.imgPath}
              text={image.text}
              id={image._id}
              refreshVisionBoards={refreshVisionBoards}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default VisionBoard
