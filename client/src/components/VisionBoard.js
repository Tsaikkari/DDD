import React from 'react'

import ImgBox from './ImgBox'

const VisionBoard = ({ title, boxes }) => {
  // add delete
  return (
    <div class='vision-board'>
      <div class='img-box-area'>
        {boxes.map((box) => (
          <div key={box._id} imgPath={box.imgPath} text={box.text}>
            <ImgBox />
          </div>
        ))}
      </div>
      <p>{title}</p>
    </div>
  )
}

export default VisionBoard
