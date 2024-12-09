import React from 'react'

import s from './Button.module.scss'

interface Props {
	className?: string
	onClick?: () => void
	dataTesting?: string
	label: string
}

export const Button: React.FC<Props> = ({
	className,
	onClick,
	dataTesting,
	label,
}) => {
	return (
		<button
			data-testid={dataTesting}
			onClick={onClick}
			className={className ? `${s.button} ${className}` : s.button}
		>
			{label}
		</button>
	)
}
