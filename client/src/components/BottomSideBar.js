import React from 'react'
import { Button } from 'react-bootstrap'

const BottomSideBar = ({ handleShowImgBoxForm }) => {
  return (
    <div>
      <Button className='add-vision-board-btn' onClick={handleShowImgBoxForm}>
        Add Images
      </Button>
    </div>
  )
}

export default BottomSideBar
