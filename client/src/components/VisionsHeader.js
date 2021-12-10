import React from 'react'
import { Button } from 'react-bootstrap'

const VisionsHeader = ({ handleShowVisionBoardForm, handleShowImgBoxForm }) => {
  return (
    <header>
      <Button onClick={handleShowVisionBoardForm}>New vision board</Button>
      <Button onClick={handleShowImgBoxForm}>Add an image</Button>
    </header>
  )
}

export default VisionsHeader
