import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'

const ImgBox = ({ box }) => {
  return (
    <Draggable grid={[400, 400]}>
      <Card className='img-card' key={box._id}>
        <Image
          src={box.imgPath}
          style={{ height: '400px', width: '400px' }}
          alt='vision-board-img'
        ></Image>
        <p onClick={() => {}}>
          <i class='fas fa-trash'></i>
        </p>
        <p>{box.text}</p>
      </Card>
    </Draggable>
  )
}

export default ImgBox
