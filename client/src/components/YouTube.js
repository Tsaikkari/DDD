import { Form, Button } from 'react-bootstrap'

const YouTube = ({ queryterm, setQueryTerm, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit} className='video-search'>
        <Form.Group controlId='queryterm'>
          <Form.Control
            type='text'
            placeholder='Search from youtube'
            value={queryterm}
            name='queryterm'
            onChange={(e) => setQueryTerm(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className='search-btn' type='submit'>
          Search
        </Button>
      </Form>
    </>
  )
}

export default YouTube
