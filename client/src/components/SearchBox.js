import { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ videos }) => {
  const [searchWord, setSearchWord] = useState('')
  const [filteredVideos, setFilteredVideos] = useState([])
  const [showAll, setShowAll] = useState(true)

  const showVideos = showAll ? videos : filteredVideos

  const handleSearch = (event) => {
    console.log(event.target.value)
    let searchVideo = event.target.value
    // TODO: fix
    let filteredVideos = videos.filter((video) => {
      return video.title.toLowerCase().includes(searchVideo.toLowerCase())
    })
    setSearchWord(searchWord)
    if (searchWord === '') {
      setShowAll((all) => (all = showVideos))
    } else {
      setFilteredVideos((video) => (video = filteredVideos))
      setShowAll(!showAll)
    }
  }

  return (
    <div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            name='searchWord'
            value={searchWord}
            onChange={handleSearch}
            placeholder='Search video by its title'
            className='mr-sm-3 search-input'
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBox
