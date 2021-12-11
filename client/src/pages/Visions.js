import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import AddImgBox from '../components/AddImgBox'
import VisionsHeader from '../components/VisionsHeader'
import VisionBoard from '../components/VisionBoard'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [boxes, setBoxes] = useState([])
  const [addBox, setAddBox] = useState(false)
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

  const getImgBoxes = () => {
    axios
      .get('/api/imgbox', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setBoxes(response.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getImgBoxes()
  }, [])

  const handleShowImgBoxForm = () => {
    setAddBox(!addBox)
  }

  return (
    <div>
      <VisionsHeader handleShowImgBoxForm={handleShowImgBoxForm} />
      <main>
        {addBox && (
          <AddImgBox
            addBox={addBox}
            setAddBox={setAddBox}
            refreshVisionBoards={getVisionBoards}
            refreshImgBoxes={getImgBoxes}
          />
        )}
        <div className='boards'>
          {boards.length > 0 ? (
            boards.map((board) => (
              <Container key={board._id} className='vision-board-container'>
                <VisionBoard boxes={boxes} setBoxes={setBoxes} />
              </Container>
            ))
          ) : (
            <VisionBoard boxes={boxes} setBoxes={setBoxes} />
          )}
        </div>
      </main>
    </div>
  )
}

export default Visions
