import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ImgBoxesHeader = ({ handleShowImgBoxForm }) => {
  return (
    <header>
      <Button className='add-image-btn' onClick={handleShowImgBoxForm}>
        Add an Image
      </Button>
      <Link to='/visionboards' className='finished-board-btn'>
        Finished
      </Link>
    </header>
  )
}

export default ImgBoxesHeader
