import * as S from './styles'
import { NavLink } from 'react-router-dom'
import UserItem from '../userItem/UserItem'
import { date } from '../utitits/mock'

const UserList = ({users}) => {

  return (
    <S.List>
      {users?.map((user) => (
        <NavLink to={`/userinfo/${user.id}`} key={user.id}>
          <UserItem user={user} />
        </NavLink>
      ))}
    </S.List>
  )
}

export default UserList
