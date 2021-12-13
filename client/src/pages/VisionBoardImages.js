import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ImgBoxesHeader from '../components/ImgBoxesHeader'
import AddImgBox from '../components/AddImgBox'
import Message from '../components/Message'

const VisionBoardImages = () => {
  const [boxes, setBoxes] = useState([])
  const [addBox, setAddBox] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [message, setMessage] = useState('')

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
          message={message}
          setMessage={setMessage}
        />
      )}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      <Message>{message}</Message>
      {/* TODO:  */}
      <h1>Instructions on how to create a vision board. </h1>
    </div>
  )
}

export default VisionBoardImages
