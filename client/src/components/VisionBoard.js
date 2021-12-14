import React from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import ImgBox from './ImgBox'

const VisionBoard = ({ title, images, id, refreshVisionBoards }) => {
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const deleteVisionBoard = async (id) => {
    if (window.confirm('Delete vision board?')) {
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
