import { render, screen } from '@testing-library/react'
import App from '../infrastucture/ui/App'
import { createMockServer } from './mockServer'
import userEvent from '@testing-library/user-event'

createMockServer()

describe('App suite', () => {
  it('should render correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Dog CEO' })).toBeInTheDocument()
  })

  it('should render mock list of dogs', async () => {
    render(<App />)

    const list = await screen.findAllByTestId('dog-card')
    expect(list).toHaveLength(7)
  })

  it('should show dogs filtered by breed', async () => {
    render(<App />)

    expect(await screen.findAllByTestId('dog-card')).toHaveLength(7)

    const [filterByBreed, filterBySubBreed] = screen.getAllByRole('textbox')

    userEvent.type(filterByBreed, 'afr')

    expect(screen.getByText('african')).toBeInTheDocument()
    expect(await screen.findAllByTestId('dog-card')).toHaveLength(1)
  })

  it('should show dogs filtered by sub breed', async () => {
    render(<App />)

    expect(await screen.findAllByTestId('dog-card')).toHaveLength(7)

    const [filterByBreed, filterBySubBreed] = screen.getAllByRole('textbox')

    userEvent.type(filterBySubBreed, 'sheph')

    expect(screen.getByText('australian')).toBeInTheDocument()
    expect(screen.getByText('shepherd')).toBeInTheDocument()
    expect(await screen.findAllByTestId('dog-card')).toHaveLength(1)
  })

  it('should show dogs filtered by breed and sub breed', async () => {
    render(<App />)

    expect(await screen.findAllByTestId('dog-card')).toHaveLength(7)

    const [filterByBreed, filterBySubBreed] = screen.getAllByRole('textbox')

    userEvent.type(filterByBreed, 'hus')
    userEvent.type(filterBySubBreed, 'span')

    expect(screen.getByText('husond')).toBeInTheDocument()
    expect(screen.getByText('husky')).toBeInTheDocument()
    expect(await screen.findAllByTestId('dog-card')).toHaveLength(2)
  })

  it('should added breed filter ', () => {
    render(<App />)

    const filters = screen.getAllByRole('textbox')
    expect(filters).toHaveLength(2)

    const button = screen.getByRole('button', { name: 'add breed' })

    userEvent.click(button)
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
  })

  it('should added sub breed filter ', () => {
    render(<App />)

    const filters = screen.getAllByRole('textbox')
    expect(filters).toHaveLength(2)

    const button = screen.getByRole('button', { name: 'add sub breed' })
    userEvent.click(button)
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
  })

  it('should delete filter', () => {
    render(<App />)

    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    const buttons = screen.getAllByRole('button', { name: 'delete breed' })

    userEvent.click(buttons[0])

    expect(screen.getAllByRole('textbox')).toHaveLength(1)
  })
})
