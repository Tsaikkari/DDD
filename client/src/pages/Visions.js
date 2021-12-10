import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AddBoard from '../components/AddBoard'
import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [addBoard, setAddBoard] = useState(false)
  const [addImgBox, setAddImgBox] = useState(false)
  //add search by title or date

  const storedToken = localStorage.getItem('authToken')

  const getVisionBoards = () => {
    axios
      .get('/api/visions/user-visions', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setBoards(response.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getVisionBoards()
  }, [])

  const addNewBoard = (board) => {
    setBoards(board)
  }

  const handleShowVisionBoardForm = () => {
    setAddBoard(!addBoard)
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
            refreshVisionBoards={getVisionBoards}
          />
        ))}
        {addBoard && (
          <AddBoard
            addNewBoard={addNewBoard}
            addBoard={addBoard}
            setAddBoard={setAddBoard}
          />
        )}
      </main>
    </div>
  )
}

export default Visions
