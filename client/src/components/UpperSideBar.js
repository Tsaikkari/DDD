import React from 'react'
import { Button } from 'react-bootstrap'

import FilterBoard from './FilterBoard'

const UpperSideBar = ({ handleShowVisionBoardForm }) => {
  return (
    <div>
      <Button
        className='add-vision-board-btn'
        onClick={handleShowVisionBoardForm}
      >
        Create Vision Board
      </Button>
      <FilterBoard />
    </div>
  )
}

export default UpperSideBar
