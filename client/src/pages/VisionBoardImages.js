import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import ImgBoxesHeader from '../components/ImgBoxesHeader'
import AddImgBox from '../components/AddImgBox'
import ImgBox from '../components/ImgBox'

const VisionBoardImages = () => {
  const [boxes, setBoxes] = useState([
    // {
    //   _id: 1,
    //   imgPath: '/images/cat.jpg',
    //   text: 'get a cat',
    // },
    // {
    //   _id: 2,
    //   imgPath: '/images/developer-job.jpg',
    //   text: 'get a job',
    // },
    // {
    //   _id: 3,
    //   imgPath: '/images/me.jpg',
    //   text: 'play',
    // },
  ])
  const [addBox, setAddBox] = useState(false)
  const handleShowImgBoxForm = () => {
    setAddBox(!addBox)
  }

  const storedToken = localStorage.getItem('authToken')

  const getImgBoxes = () => {
    axios
      .get('/api/imgboxes', {
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
  return (
    <div className='vision-board-imgs-container'>
      <ImgBoxesHeader handleShowImgBoxForm={handleShowImgBoxForm} />
      {addBox && (
        <AddImgBox
          addBox={addBox}
          setAddBox={setAddBox}
          refreshImgBoxes={getImgBoxes}
        />
      )}
      <Row>
        {boxes.length === 0 && (
          <h1 className='vision-board-instructions'>Instructions</h1>
        )}
        {boxes &&
          boxes.map((box) => (
            <Col key={box._id}>
              <ImgBox
                id={box._id}
                text={box.text}
                imgPath={box.imgPath}
                refreshImgBoxes={getImgBoxes}
              />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default VisionBoardImages
