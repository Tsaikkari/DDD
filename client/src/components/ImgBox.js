import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'
import axios from 'axios'

const ImgBox = ({ text, imgPath, id, refreshImgBoxes }) => {
  const deleteImage = async () => {
    if (window.confirm('Delete image?')) {
      try {
        await axios.delete(`/api/images/${id}`)
        refreshImgBoxes()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Draggable>
      <Card className='img-card'>
        <Image
          className='img'
          src={imgPath}
          alt='vision-board-img'
          fluid
        ></Image>
        <div className='text-trash'>
          <p>{text}</p>
          <p
            onClick={() => {
              deleteImage(id)
            }}
          >
            {' '}
            *
          </p>
        </div>
      </Card>
    </Draggable>
  )
}

export default ImgBox
