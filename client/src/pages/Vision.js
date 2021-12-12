import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

import AddImgBox from '../components/AddImgBox'
import VisionHeader from '../components/VisionHeader'
import ImgBox from '../components/ImgBox'

const Vision = () => {
  const [boxes, setBoxes] = useState([
    {
      _id: 1,
      imgPath: '/images/cat.jpg',
      text: 'get a cat',
    },
    {
      _id: 2,
      imgPath: '/images/developer-job.jpg',
      text: 'get a job',
    },
    {
      _id: 3,
      imgPath: '/images/cat.jpg',
      text: 'get a cat',
    },
  ])

  console.log('BOXES', boxes)

  const [addBox, setAddBox] = useState(false)
  //add search by title or date

  const storedToken = localStorage.getItem('authToken')

  // const getImgBoxes = () => {
  //   axios
  //     .get('/api/images/user-images', {
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

  const handleShowImgBoxForm = () => {
    setAddBox(!addBox)
  }

  return (
    <div className='vision-board-container'>
      <VisionHeader handleShowImgBoxForm={handleShowImgBoxForm} />
      {addBox && (
        <AddImgBox
          addBox={addBox}
          setAddBox={setAddBox}
          //refreshImgBoxes={getImgBoxes}
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
                //refreshImgBoxes={getImgBoxes}
              />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default Vision
