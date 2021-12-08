import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ProjectDetails() {

	const [project, setProject] = useState(null)

	const { id } = useParams()
	console.log(id)
	useEffect(() => {
		axios.get(`/api/projects/${id}`)
			.then(response => {
				setProject(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{project && (
				<>
					<h1>Project Details</h1>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<Link to={`/projects/edit/${project._id}`}>
						<button>Edit this project</button>
					</Link>
				</>
			)}
		</>
	)
}
