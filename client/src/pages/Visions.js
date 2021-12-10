import React, { useState } from 'react'

import AddVisionBoard from '../components/AddVisionBoard'
import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [addVisionBoard, setAddVisionBoard] = useState(false)
  const [addImgBox, setAddImgBox] = useState(false)
  //add search by title or date

  const addBoard = (board) => {
    setBoards(board)
  }

  const handleShowVisionBoardForm = () => {
    setAddVisionBoard(!addVisionBoard)
  }

  const handleShowImgBoxForm = () => {
    setAddImgBox(!addImgBox)
  }

  return (
    <div>
      <VisionsHeader
        handleShowVisionBoardForm={handleShowVisionBoardForm}
        handleShowImgBoxForm={handleShowImgBoxForm}
      />
      <main>
        {boards.map((board) => (
          <VisionBoard
            key={board._id}
            title={board.title}
            addBoard={addBoard}
          />
        ))}
        {addVisionBoard && (
          <AddVisionBoard
            addVisionBoard={addVisionBoard}
            setAddVisionBoard={setAddVisionBoard}
          />
        )}
      </main>
    </div>
  )
}

export default Visions
