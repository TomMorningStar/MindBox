import React from 'react'

import { TaskFilter } from '@/shared/enums/taskFilter'
import { Todo } from '@/widgets/list/ui/Todo/Todo'

import s from './List.module.scss'

interface Props {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	filter: TaskFilter
}

export const List: React.FC<Props> = ({ tasks, setTasks, filter }) => {
	const toggleTaskCompletion = (taskId: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const filteredTasks = tasks.filter(task => {
		switch (filter) {
			case TaskFilter.Active:
				return !task.completed
			case TaskFilter.Completed:
				return task.completed
			default:
				return true
		}
	})

	return (
		<ul className={s.list}>
			{filteredTasks.length === 0 ? (
				<div className={s.noTasks}>No tasks</div>
			) : (
				filteredTasks.map(task => (
					<Todo
						key={task.id}
						task={task}
						handleCheckboxChange={toggleTaskCompletion}
					/>
				))
			)}
		</ul>
	)
}
