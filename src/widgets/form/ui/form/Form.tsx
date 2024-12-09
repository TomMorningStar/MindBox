import React from 'react'

import { Input } from '@/shared/ui/'

import s from './Form.module.scss'

interface Props {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const Form: React.FC<Props> = ({ setTasks }) => {
	const [newTaskName, setNewTaskName] = React.useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTaskName(event.target.value)
	}

	const addTask = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (newTaskName.trim()) {
			setTasks(prevTasks => [
				...prevTasks,
				{ id: new Date().getTime(), name: newTaskName, completed: false },
			])
			setNewTaskName('')
		}
	}

	return (
		<form onSubmit={addTask} className={s.form} data-testid='form'>
			<Input
				dataTesting='inputAddTask'
				value={newTaskName}
				focus={true}
				onChange={handleInputChange}
				type='text'
				placeholder='What needs to be done?'
				className={s.input}
			/>
		</form>
	)
}
