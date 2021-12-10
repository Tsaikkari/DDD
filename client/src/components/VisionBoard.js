import React from 'react'

const VisionBoard = ({ title, boxes }) => {
  // add delete
  return (
    <div class='vision-board'>
      <div class='img-box-area'>
        {boxes.map((box) => (
          <div key={box._id} imgPath={box.imgPath} text={box.text}>
            Add ImgBox component here
          </div>
        ))}
      </div>
      <p>{title}</p>
    </div>
  )
}

export default VisionBoard
