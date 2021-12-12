import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'

const ImgBox = ({ text, imgPath, boxes, setBoxes, id }) => {
  const deleteImgBox = (id) => {
    setBoxes(boxes.filter((item) => item.id !== id))
  }
  return (
    <Draggable>
      <Card className='img-card'>
        <Image
          className='img'
          src={imgPath}
          // style={{ height: '380px', width: '446px' }}
          alt='vision-board-img'
          fluid
        ></Image>
        <div className='text-trash'>
          <p>{text}</p>
          <p
            onClick={() => {
              deleteImgBox(id)
            }}
          >
            <i className='fas fa-trash'></i>
          </p>
        </div>
      </Card>
    </Draggable>
  )
}

export default ImgBox
