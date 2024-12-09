import React from 'react'

import { TaskFilter } from '@/shared/enums/taskFilter'
import { Button } from '@/shared/ui'
import s from './Navigate.module.scss'

interface Props {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	setFilter: React.Dispatch<React.SetStateAction<TaskFilter>>
}

export const Navigate: React.FC<Props> = ({ tasks, setFilter, setTasks }) => {
	const incompleteTaskCount = tasks.filter(task => !task.completed).length
	const [activeFilterIndex, setActiveFilterIndex] = React.useState<number>(0)

	const changeFilter = (selectedFilter: TaskFilter, index: number) => {
		setFilter(selectedFilter)
		setActiveFilterIndex(index)
	}

	const clearCompletedTasks = () => {
		setTasks(prevTasks => prevTasks.filter(task => !task.completed))
	}

	return (
		<nav className={s.nav}>
			<div className={s.countLeft}>{incompleteTaskCount} items left</div>
			<div className={s.todoStatus}>
				{Object.values(TaskFilter).map((status, index) => (
					<button
						key={status}
						className={activeFilterIndex === index ? s.active : ''}
						onClick={() => changeFilter(status, index)}
					>
						{status}
					</button>
				))}
			</div>
			<Button
				dataTesting='clear-completed'
				label='Clear completed'
				onClick={clearCompletedTasks}
			/>
		</nav>
	)
}
