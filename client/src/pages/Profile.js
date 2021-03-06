import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import Message from '../components/Message'
import Footer from '../components/Footer'
import { config } from '../reqHeaders'

const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { user, isLoading, isLoggedIn } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  useEffect(() => {
    axios
      .get(`/api/users/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName(response.data.name)
        setEmail(response.data.email)
      })
      .catch((err) => console.log(err))
    //eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateUser = { email, name }

    axios
      .put(`/api/users/${user._id}`, updateUser, config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <h1 className='greeting'>Hey, {user.name} ❦</h1>
          <Row className='profile-row'>
            <Col className='info-col' md={8}>
              <h2 className='create'>
                Create and enjoy your daily dose of dopamine!
              </h2>
              <ListGroup className='group' variant='flush'>
                <ListGroup.Item>
                  <Link to='/videos' className='link'>
                    Upload your favorite YouTube videos
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to='/visionboards' className='link'>
                    Create your vision boards
                  </Link>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <Link to='notes' className='link'>
                    Take beautiful notes
                  </Link>
                </ListGroup.Item> */}
              </ListGroup>
              <Image src='' alt='' className='profile-page-img' />
            </Col>

            <Col className='form-col' md={3}>
              <h1 className='form-header m-4'>Update Your Info</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type='submit' className='save-btn' variant=''>
                  Update
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            {isLoading && <h3>Loading ...</h3>}
            {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
          </Row>
        </>
      )}
      <Footer />
    </>
  )
}

export default Profile
