import { useEffect, useState } from 'react'
import axios from 'axios'

function useBoxes() {
  const [boxes, setBoxes] = useState([])
  const [errorMessage, setErrorMessage] = useState(undefined)

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    axios
      .get('/api/imgboxes', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setBoxes(response.data)
      })
      .catch((err) => {
        const errorMessage = err.response.data.message
        setErrorMessage(errorMessage)
      })
  }, [setBoxes, boxes, errorMessage])
  return [boxes, setBoxes, errorMessage]
}

export default useBoxes
