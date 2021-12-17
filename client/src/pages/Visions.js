import React, { useState, useEffect } from 'react'
import axios from 'axios'

import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'
import AddVisionBoard from '../components/AddVisionBoard'
import collage from '../images/collage.jpg

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
          <div
            className='vision-board-instructions'
            style={{
              backgroundImage: `url(${collage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '90vh',
              width: '100vw',
            }}
          >
            <h1>
              <b>
                Create a vision board by clicking on the <b>Add Board</b> button
              </b>
            </h1>
            {/* <p>
                <b>
                  You can add multiple vision boards and delete them<br></br> by
                  clicking on the ~ sign on the upper right corner.
                </b>
              </p> */}
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
