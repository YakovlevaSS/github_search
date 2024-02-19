import * as S from './styles'
import { NavLink } from 'react-router-dom'
import UserItem from '../userItem/UserItem'
import { useSelector } from 'react-redux'

const UserList = () => {
  const { users } = useSelector((state) => state.users)

  return (
    <S.List>
      {users?.map((user) => (
        <NavLink to={`/userinfo/${user.login}`} key={user.id}>
          <UserItem user={user} />
        </NavLink>
      ))}
    </S.List>
  )
}

export default UserList
