import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditProject() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { id } = useParams()
  console.log(id)

  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`/api/projects/${id}`)
      .then((response) => {
        const { title, description } = response.data
        setTitle(title)
        setDescription(description)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const requestBody = { title, description }
    axios.put(`/api/projects/${id}`, requestBody).then((response) => {
      // this is a redirect using react router
      navigate(`/projects/${id}`)
    })
  }

  const deleteProject = () => {
    axios
      .delete(`/api/projects/${id}`)
      .then(() => {
        // redirect to the projects list
        navigate('/projects')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Edit this Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='description'>Description: </label>
        <input
          id='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Update this project</button>
      </form>
      <button onClick={deleteProject}>Delete this project</button>
    </div>
  )
}
