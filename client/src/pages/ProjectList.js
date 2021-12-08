import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'
import AddProject from '../components/AddProject'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  const storedToken = localStorage.getItem('authToken')

  const getAllProjects = () => {
    axios
      .get('/api/projects', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setProjects(response.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllProjects()
  }, [])

  if (projects.length === 0) {
    return <></>
  }
  return (
    <>
      <h1>All the projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
      <AddProject refreshProjects={getAllProjects} />
    </>
  )
}
