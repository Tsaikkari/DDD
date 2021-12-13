import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'
import AddVisionBoard from '../components/AddVisionBoard'
//import { RefreshContext } from '../context/refresh'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [addBoard, setAddBoard] = useState(false)
  //add search by title or date

  const storedToken = localStorage.getItem('authToken')

  const getVisionBoards = () => {
    axios
      .get('/api/visions/user-visions', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const sorted = response.data.reverse()
        setBoards(sorted)
        console.log(sorted, 'visionboardsRESP')
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

        <div className='boards'>
          {boards.map((board) => (
            <div key={board._id}>
              <VisionBoard images={board.images} title={board.title} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Visions
