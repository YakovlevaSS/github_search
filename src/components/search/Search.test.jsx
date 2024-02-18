import { render, screen, fireEvent } from '@testing-library/react'
import Search from './Search'

describe('Test for Input', () => {
  test('renders placeholder and sets userLogin correctly', () => {
    const setUserLoginMock = jest.fn() // Создаем mock-функцию для setUserLogin
    render(<Search setUserLogin={setUserLoginMock} />)
    const inputEl = screen.getByPlaceholderText('Введите ваш запрос...')
    fireEvent.change(inputEl, { target: { value: 'testValue' } })

    //Проверяем верный рендер компонента
    expect(inputEl).toBeInTheDocument()
    //Проверяем, что верно устанавливается userLogin
    expect(setUserLoginMock).toHaveBeenCalledWith('testValue')
  })
})
