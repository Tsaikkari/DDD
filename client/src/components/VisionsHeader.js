import React from 'react'
import { Button } from 'react-bootstrap'

import FilterBoard from './FilterBoard'

const VisionsHeader = ({ handleShowVisionBoardForm }) => {
  return (
    <header>
      <Button className='add-board-btn' onClick={handleShowVisionBoardForm}>
        Add Board
      </Button>
      <FilterBoard />
    </header>
  )
}

export default VisionsHeader
