import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AddProject(props) {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = e => {
		console.log('submitting')
		e.preventDefault()
		// send a post request with the data from the state to the server
		// to create a new project
		const requestBody = { title: title, description: description }
		axios.post('/api/projects', requestBody)
			.then(response => {
				console.log(response)
				// reset state
				setTitle('')
				setDescription('')
				// this triggers a function in ProjectList
				props.refreshProjects()
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<h1>Add a Project</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					id="title"
					type="text"
					value={title}
					// name="title"
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor="description">Description</label>
				<input
					id="description"
					type="text"
					value={description}
					// name="description"
					onChange={e => setDescription(e.target.value)}
				/>
				<button type="submit">Add this project</button>
			</form>
		</div>
	)
}
