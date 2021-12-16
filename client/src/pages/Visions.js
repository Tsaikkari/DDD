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
    //eslint-disable-next-line
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
          <div className='vision-board-instructions'>
            <h3>
              Create a vision board by clicking on the <b>Add Board</b> button.
            </h3>
            <h4>Give the vision board a title and click Save.</h4>
            <p>
              You can add multiple vision boards and delete them by clicking the
              little star on upper right corner.
            </p>
          </div>
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
