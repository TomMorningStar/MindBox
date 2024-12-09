import React from 'react'

import { TaskFilter } from '@/shared/enums/taskFilter'
import { Title } from '@/shared/ui/title/Title'
import { Form } from '@/widgets/form'
import { List } from '@/widgets/list/ui/list/List'
import { Navigate } from '@/widgets/navigate/ui/navigate/Navigate'

import s from './TodoListWrapper.module.scss'

export const TodoListWrapper: React.FC = () => {
	const [tasks, setTasks] = React.useState<Task[]>([
		{ id: new Date().getTime(), name: 'example 1', completed: true },
		{ id: new Date().getTime() + 1, name: 'example 2', completed: false },
		{ id: new Date().getTime() + 2, name: 'example 3', completed: false },
	])

	const [filter, setFilter] = React.useState<TaskFilter>(TaskFilter.All)

	return (
		<main className={s.main}>
			<Title label='Todos' />
			<section className={s.section}>
				<Form setTasks={setTasks} />
				<List tasks={tasks} setTasks={setTasks} filter={filter} />
				<Navigate tasks={tasks} setFilter={setFilter} setTasks={setTasks} />
			</section>
		</main>
	)
}
