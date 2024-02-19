import { render, screen } from '@testing-library/react'
import UserItem from './UserItem'

describe('Test for UserItem component', () => {
  test('renders UserItem component correctly', () => {
    const user = { login: 'testUser', avatar_url: 'testAvatarUrl' }
    render(<UserItem user={user} />)

    // Проверяем, что элементы успешно отрендерены
    const avatarElement = screen.getByAltText('avatar')
    const loginElement = screen.getByText('testUser')

    // Проверяем, что изображение аватара успешно отрендерено с указанным src
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).toHaveAttribute('src', 'testAvatarUrl')

    // Проверяем, что текст логина успешно отрендерен
    expect(loginElement).toBeInTheDocument()
  })
})
