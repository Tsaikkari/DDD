import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

import AddVisionBoard from '../components/AddVisionBoard'
import AddImgBox from '../components/AddImgBox'
import UpperSideBar from '../components/UpperSideBar'
import BottomSideBar from '../components/BottomSideBar'
import VisionBoard from '../components/VisionBoard'
import imgBoxes from '../box-data'

const Visions = () => {
  const [boards, setBoards] = useState([])
  const [boxes, setBoxes] = useState([
    {
      imgPath: '/images/cat.jpg',
      text: 'get a cat',
    },
    {
      imgPath: '/images/developer-job.jpg',
      text: 'get a job',
    },
    {
      imgPath: '/images/cat.jpg',
      text: 'get a cat',
    },
  ])

  const [addBox, setAddBox] = useState(false)
  const [addBoard, setAddBoard] = useState(false)
  //add search by title or date

  const printBoxes = () => {
    return boxes.map((box) => box.text)
  }
  useEffect(() => {
    console.log(printBoxes())
  }, [])

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

  // const getImgBoxes = () => {
  //   axios
  //     .get('/api/imgbox', {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((response) => {
  //       console.log(response)
  //       setBoxes(response.data)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // useEffect(() => {
  //   getImgBoxes()
  // }, [])

  const handleShowVisionBoardForm = () => {
    setAddBoard(!addBoard)
  }

  // const handleShowImgBoxForm = () => {
  //   setAddBox(!addBox)
  // }

  return (
    <Row>
      <Col md={2}>
        <Row className='upper-sidebar-row'>
          <UpperSideBar handleShowVisionBoardForm={handleShowVisionBoardForm} />
          {addBoard && (
            <AddVisionBoard
              addBox={addBox}
              setAddBox={setAddBox}
              refreshVisionBoards={getVisionBoards}
              //refreshImgBoxes={getImgBoxes}
            />
          )}
        </Row>
        <Row className='bottom-sidebar-row'>
          {/* <BottomSideBar handleShowImgBoxForm={handleShowImgBoxForm} /> */}
          {/* {addBox && (
            <AddImgBox
              addBox={addBox}
              setAddBox={setAddBox}
              refreshVisionBoards={getVisionBoards}
              refreshImgBoxes={getImgBoxes}
            />
          )} */}
        </Row>
      </Col>
      <Col md={10}>
        <main>
          <div>
            {boards.length > 0 ? (
              boards.map((board) => (
                <div key={board._id} className='vision-board-container'>
                  <VisionBoard
                    board={board}
                    boxes={boxes}
                    setBoxes={setBoxes}
                  />
                </div>
              ))
            ) : (
              <VisionBoard boxes={boxes} setBoxes={setBoxes} />
            )}
          </div>
        </main>
      </Col>
    </Row>
  )
}

export default Visions
