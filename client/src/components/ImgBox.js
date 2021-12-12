import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'

const ImgBox = ({ box, boxes, setBoxes }) => {
  const deleteImgBox = (id) => {
    setBoxes(boxes.filter((item) => item.id !== id))
  }
  return (
    <Draggable>
      <Card className='img-card' key={box._id}>
        <Image
          className='img'
          src={box.imgPath}
          // style={{ height: '380px', width: '446px' }}
          alt='vision-board-img'
          fluid
        ></Image>
        <div className='text-trash'>
          <p>{box.text}</p>
          <p
            onClick={() => {
              deleteImgBox(box._id)
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
