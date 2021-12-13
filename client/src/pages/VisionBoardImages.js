import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import axios from 'axios'

import ImgBoxesHeader from '../components/ImgBoxesHeader'
import AddImgBox from '../components/AddImgBox'
import Message from '../components/Message'

const VisionBoardImages = () => {
  const [boxes, setBoxes] = useState([])
  const [addBox, setAddBox] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [successMessage, setSuccessMessage] = useState()

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
        console.log('imgboxes on visionboard', response.data)
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  useEffect(() => {
    getImgBoxes()
  }, [])
  return (
    <div>
      <ImgBoxesHeader handleShowImgBoxForm={handleShowImgBoxForm} />
      {addBox && (
        <AddImgBox
          addBox={addBox}
          setAddBox={setAddBox}
          refreshImgBoxes={getImgBoxes}
          boxes={boxes}
        />
      )}
      {errorMessage ? (
        <Message variant='danger'>{errorMessage}</Message>
      ) : (
        <Message variant='success'>Image uploaded!</Message>
      )}
      <h1>Instructions on how to create a vision board. </h1>
    </div>
  )
}

export default VisionBoardImages
