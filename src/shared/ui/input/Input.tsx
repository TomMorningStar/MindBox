import React from 'react'

interface Props {
	placeholder: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: string
	className?: string
	dataTesting?: string
	focus?: boolean
}

export const Input: React.FC<Props> = ({
	value,
	onChange,
	placeholder,
	type,
	className,
	dataTesting,
	focus = false,
}) => {
	return (
		<input
			autoFocus={focus ? true : false}
			data-testid={dataTesting}
			className={className}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}
