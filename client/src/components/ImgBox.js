import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'

const ImgBox = ({ box }) => {
  return (
    <Draggable grid={[10, 10]}>
      <Card className='img-card' key={box._id}>
        <Image
          src={box.imgPath}
          style={{ height: '400px', width: '400px' }}
          alt='vision board img'
        ></Image>
      </Card>
    </Draggable>
  )
}

export default ImgBox
