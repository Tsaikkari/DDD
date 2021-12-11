import React from 'react'
import Draggable from 'react-draggable'
import { Card, Image } from 'react-bootstrap'

const ImgBox = ({ box, boxes, setBoxes }) => {
  return (
    <Draggable grid={[400, 400]}>
      <Card className='img-card' key={box._id}>
        <div className='box-imgs'>
          <Image
            src={box.imgPath}
            style={{ height: '400px', width: '400px' }}
            alt='vision-board-img'
          ></Image>
          <p
            onClick={() => {
              const boxList = boxes.filter((item) => {
                if (item._id !== box._id) {
                  return item
                }
              })
              setBoxes(boxList)
            }}
          >
            <i class='fas fa-trash'></i>
          </p>
        </div>
        <p>{box.text}</p>
      </Card>
    </Draggable>
  )
}

export default ImgBox
