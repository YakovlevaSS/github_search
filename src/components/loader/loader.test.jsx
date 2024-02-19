import { render, screen } from '@testing-library/react'
import Loader from './loader'

describe('Test for Loader component', () => {
  test('renders Loader component correctly', () => {
    render(<Loader />)
    const textElement = screen.getByText('Загружаем информацию...')
    // Проверяем, что компонент успешно отрендерился
    expect(textElement).toBeInTheDocument()
  })
})
