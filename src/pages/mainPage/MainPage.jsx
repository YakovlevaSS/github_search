import * as S from './styles'

import Search from '../../components/search/Search'
import UserList from '../../components/userList/userList'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useGetUsersQuery } from '../../store/Api/usersApi'
import { setUsers } from '../../store/slices/usersSlice'

function MainPage() {
  const [userLogin, setUserLogin] = useState('')
  const [order, setOrder] = useState('')
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetUsersQuery({
    userLogin,
    order,
    page,
  })

dispatch(setUsers(data))

  console.log(data);

  return (
    <S.Wrap>
      <Search setUserLogin={setUserLogin} />
      <UserList users={data}/>
    </S.Wrap>
  )
}

export default MainPage
