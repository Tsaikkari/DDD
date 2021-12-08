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

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      console.log('no user id')
      //navigate('/login')
    }
    axios
      .get(`/api/users`)
      .then((response) => {
        console.log(response, 'RES')
        const { name, email, password } = response.data
        setName(name)
        setEmail(email)
        setPassword(password)
      })
      .catch((err) => console.log(err))
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateUser = { email, password, name }

    axios
      .post(`/api/users`, updateUser)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  console.log(user, 'user in profile')
  return (
    <FormContainer>
      <h1 className='m-4'>Update</h1>
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
          Sign Up
        </Button>
      </Form>
      {isLoading && <h3>Loading ...</h3>}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </FormContainer>
  )
}

export default Profile
