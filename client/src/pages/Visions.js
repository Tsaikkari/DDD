import React, { useState, useEffect } from 'react'
import axios from 'axios'

import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'
import AddVisionBoard from '../components/AddVisionBoard'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [addBoard, setAddBoard] = useState(false)

  const storedToken = localStorage.getItem('authToken')

  const getVisionBoards = () => {
    axios
      .get('/api/visions/user-visions', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const sorted = response.data.reverse()
        setBoards(sorted)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getVisionBoards()
  }, [])

  const handleShowVisionBoardForm = () => {
    setAddBoard(!addBoard)
  }

  return (
    <div>
      <VisionsHeader handleShowVisionBoardForm={handleShowVisionBoardForm} />
      <main>
        {addBoard && (
          <AddVisionBoard
            addBoard={addBoard}
            setAddBoard={setAddBoard}
            boards={boards}
            refreshVisionBoards={getVisionBoards}
          />
        )}
        {boards.length === 0 ? (
          <p>Instructions</p>
        ) : (
          <div className='boards'>
            {boards.map((board) => (
              <div key={board._id}>
                <VisionBoard
                  images={board.images}
                  title={board.title}
                  id={board._id}
                  refreshVisionBoards={getVisionBoards}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Visions
