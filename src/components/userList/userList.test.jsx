import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { usersReducer } from '../../store/slices/usersSlice';
import UserList from './UserList';

describe("Test for UserList component", () => {
  test('renders UserList component correctly', () => {
    const mockUsers = [
      { id: 1, login: 'user1', avatar_url: 'avatar1.jpg' },
      { id: 2, login: 'user2', avatar_url: 'avatar2.jpg' },
    ];

    const store = createStore(usersReducer, { users: { users: mockUsers } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </Provider>
    );

    // Проверяем, что каждый пользователь отображается
    mockUsers.forEach((user) => {
      const userItemElement = screen.getByText(user.login);
      expect(userItemElement).toBeInTheDocument();
    });
  });
});