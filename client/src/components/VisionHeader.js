import React from 'react'
import { Button } from 'react-bootstrap'

const VisionHeader = ({ handleShowImgBoxForm }) => {
  return (
    <header>
      <Button className='add-img-box-btn' onClick={handleShowImgBoxForm}>
        Add Images
      </Button>
    </header>
  )
}

export default VisionHeader
