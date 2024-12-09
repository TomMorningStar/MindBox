import React from 'react'
import s from './Title.module.scss'
interface Props {
	className?: string
	label: string
}

export const Title: React.FC<Props> = ({ className, label }) => {
	return (
		<h1 className={className ? `${s.title} ${className}` : s.title}>{label}</h1>
	)
}
