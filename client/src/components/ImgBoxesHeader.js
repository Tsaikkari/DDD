import React from 'react'
import { Button } from 'react-bootstrap'

const ImgBoxesHeader = ({ handleShowImgBoxForm }) => {
  return (
    <header>
      <Button className='add-image-btn' onClick={handleShowImgBoxForm}>
        Add Image
      </Button>
    </header>
  )
}

export default ImgBoxesHeader
