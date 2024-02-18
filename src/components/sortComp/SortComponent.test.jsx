import { render, screen, fireEvent } from '@testing-library/react';
import SortComponent from './SortComponent';

describe("Test for SortComponent", () => {
  test('displays correct text based on sort state', () => {
    const setOrderMock = jest.fn();
    render(<SortComponent setOrder={setOrderMock} />);
    const buttonEl = screen.getByText(/Фильтровать по/); // Получаем элемент кнопки по тексту

    // Проверяем, что изначально отображается текст для убывающего порядка
    expect(buttonEl).toHaveTextContent('Фильтровать по убыванию числа репозиториев');

    fireEvent.click(buttonEl);

    // Проверяем, что теперь отображается текст для возрастающего порядка
    expect(buttonEl).toHaveTextContent('Фильтровать по возрастанию числа репозиториев');

    // Проверяем, что mock-функция setOrder была вызвана с ожидаемым значением при изменении состояния sort
    expect(setOrderMock).toHaveBeenCalledWith('asc');
  });
});