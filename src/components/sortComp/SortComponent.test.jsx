import { render, screen, fireEvent } from '@testing-library/react'
import SortComponent from './SortComponent'

describe('SortComponent', () => {
  test('calls setOrder with correct arguments on button click', () => {
    const setOrderMock = jest.fn()
    render(<SortComponent setOrder={setOrderMock} />)

    // Получаем ссылку на первую кнопку ("Фильтровать по возрастанию числа репозиториев")
    const ascButton = screen.getByText(
      /Фильтровать по возрастанию числа репозиториев/,
    )
    fireEvent.click(ascButton)

    // Проверяем, что mock-функция setOrder была вызвана с ожидаемым значением
    expect(setOrderMock).toHaveBeenCalledWith('asc')

    // Получаем ссылку на вторую кнопку ("Фильтровать по убыванию числа репозиториев")
    const descButton = screen.getByText(
      /Фильтровать по убыванию числа репозиториев/,
    )

    fireEvent.click(descButton)

    // Проверяем, что mock-функция setOrder была вызвана с ожидаемым значением
    expect(setOrderMock).toHaveBeenCalledWith('desc')
  })
})
