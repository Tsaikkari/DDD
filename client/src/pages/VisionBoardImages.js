import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ImgBoxesHeader from '../components/ImgBoxesHeader'
import AddImgBox from '../components/AddImgBox'
import Message from '../components/Message'
import pictures from '../images/pictures.jpg'

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
          boxes={boxes}
          addBox={addBox}
          setAddBox={setAddBox}
          refreshImgBoxes={getImgBoxes}
          setMessage={setMessage}
        />
      )}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      <Message>{message}</Message>
      <div
        className='add-images-instructions'
        style={{
          backgroundImage: `url(${pictures})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '90vh',
          width: '100vw',
        }}
      >
        <h3>Click the Add Image button to add an image to the vision board</h3>
        <p>
          You can add multiple images and delete them by clicking ~ <br></br>
          When finished, go to <b>My Vision Boards</b> to view the vision board
        </p>
      </div>
    </div>
  )
}

export default VisionBoardImages
