import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { user, isLoading } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`/api/users/`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const profileUser = response.data.find((x) => x._id === user._id)
        const { name, email, password } = profileUser
        setName(name)
        setEmail(email)
        setPassword(password)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateUser = { email, password, name }

    axios
      .post(`/api/users(${user._id})`, updateUser)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  return (
    <FormContainer>
      <h1 className='m-4'>Update Your Info</h1>
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
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='save-btn' variant=''>
          Update
        </Button>
      </Form>
      {isLoading && <h3>Loading ...</h3>}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </FormContainer>
  )
}

export default Profile
