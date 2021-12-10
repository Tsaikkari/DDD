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

  const getVisionBoardsAndImgBoxes = () => {
    axios
      .all([
        axios.get('/api/visions/user-visions', {
          headers: { Authorization: `Bearer ${storedToken}` },
        }),
        axios.get('/api/imgboxes/user-imgboxes', {
          headers: { Authorization: `Bearer ${storedToken}` },
        }),
      ])
      .then(
        axios.spread((obj1, obj2) => {
          setBoards(obj1.data)
          setBoxes(obj2.data)
        })
      )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getVisionBoardsAndImgBoxes()
  }, [])

  const handleShowImgBoxForm = () => {
    setAddBox(!addBox)
  }

  return (
    <div>
      <VisionsHeader handleShowImgBoxForm={handleShowImgBoxForm} />
      <main>
        <div className='board-grid'>
          {boards.map((board) => (
            <Container key={board._id}>
              <VisionBoard boxes={boxes} />
            </Container>
          ))}
        </div>
        {addBox && (
          <AddImgBox
            addBox={addBox}
            setAddBox={setAddBox}
            boxes={boxes}
            refreshBoardAndBoxes={getVisionBoardsAndImgBoxes}
          />
        )}
      </main>
    </div>
  )
}

export default Visions
