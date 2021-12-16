import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { AuthContext } from '../context/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const { loginUser, isLoading } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const credentials = { email, password }

    axios
      .post('/auth/login', credentials)
      .then((res) => {
        const token = res.data.authToken
        loginUser(token)
        navigate('/profile')
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  return (
    <FormContainer>
      <h1 className='m-4'>Login</h1>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {isLoading && <h3>Loading ...</h3>}
      <Row className='py-3'>
        <Col>
          Don't have an account? <Link to={'/signup'}>Sign Up</Link>
        </Col>
      </Row>
      {/* <Form>
        <Card>
          <a
            className='btn btn-block btn-social btn-google'
            href='http://localhost:5005/api/auth/google/dailydose'
          >
            <i className='fab fa-google'></i>
            Login with Google
          </a>
        </Card>
      </Form> */}
    </FormContainer>
  )
}

export default Login
