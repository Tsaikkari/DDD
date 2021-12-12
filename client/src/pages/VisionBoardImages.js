import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ImgBoxesHeader from '../components/ImgBoxesHeader'
import AddImgBox from '../components/AddImgBox'

const VisionBoardImages = () => {
  const [boxes, setBoxes] = useState([])
  const [addBox, setAddBox] = useState(false)
  const handleShowImgBoxForm = () => {
    setAddBox(!addBox)
  }

  const storedToken = localStorage.getItem('authToken')

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
    </div>
  )
}

export default VisionBoardImages
