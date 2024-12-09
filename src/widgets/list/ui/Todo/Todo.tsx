import s from './Todo.module.scss'

interface Props {
	task: Task
	handleCheckboxChange: (taskId: number) => void
}

export const Todo: React.FC<Props> = ({ task, handleCheckboxChange }) => {
	return (
		<li className={s.listItem}>
			<label className={s.checkboxContainer}>
				<input
					type='checkbox'
					checked={task.completed}
					onChange={() => handleCheckboxChange(task.id)}
					className={s.checkbox}
				/>
				<span
					className={
						task.completed ? `${s.checkmark} ${s.checked}` : `${s.checkmark}`
					}
				></span>
			</label>
			<span className={task.completed ? `${s.completed}` : ''}>
				{task.name}
			</span>
		</li>
	)
}
