import React from 'react'
import { Button } from 'react-bootstrap'

import FilterBoard from './FilterBoard'

const VisionsHeader = ({ handleShowImgBoxForm }) => {
  return (
    <header>
      <Button className='add-imgbox-btn' onClick={handleShowImgBoxForm}>
        Create Vision Board
      </Button>
      <FilterBoard />
    </header>
  )
}

export default VisionsHeader
