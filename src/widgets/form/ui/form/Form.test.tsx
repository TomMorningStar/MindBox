import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from './Form'

describe('Form Component', () => {
	let mockSetTasks: jest.Mock

	beforeEach(() => {
		mockSetTasks = jest.fn()
	})

	it('renders the input field', () => {
		render(<Form setTasks={mockSetTasks} />)
		const inputElement = screen.getByTestId('inputAddTask')
		expect(inputElement).toBeInTheDocument()
	})

	it('updates input value on typing', async () => {
		render(<Form setTasks={mockSetTasks} />)
		const inputElement = screen.getByTestId('inputAddTask')
		await userEvent.type(inputElement, 'New Task')
		expect(inputElement).toHaveValue('New Task')
	})

	it('calls setTasks with the new task and clears the input on form submission', () => {
		render(<Form setTasks={mockSetTasks} />)
		const inputElement = screen.getByTestId('inputAddTask')
		const formElement = screen.getByTestId('form')

		fireEvent.change(inputElement, { target: { value: 'New Task' } })
		fireEvent.submit(formElement)

		expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function))
		expect(mockSetTasks).toHaveBeenCalledTimes(1)
		expect(inputElement).toHaveValue('')
	})

	it('does not call setTasks if the input is empty', () => {
		render(<Form setTasks={mockSetTasks} />)
		const formElement = screen.getByTestId('form')
		fireEvent.submit(formElement)
		expect(mockSetTasks).not.toHaveBeenCalled()
	})
})
