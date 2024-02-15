import * as S from './styles'

import Search from '../../components/search/Search'
import UserList from '../../components/userList/userList'
import Loader from '../../components/loader/loader'
import EmptySearch from '../../components/emptySearch/EmptySearch'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetUsersQuery } from '../../store/Api/usersApi'
import { setUsers, setTotalUsers } from '../../store/slices/usersSlice'

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
if (userLogin) {
  dispatch(setUsers(data.items))
  dispatch(setTotalUsers(data.total_count))
} else {
  dispatch(setUsers(data))
}


  if (error) { 
      return (
        <S.ErrorWrap>
          <S.ErrorText>Что-то пошло не так,</S.ErrorText>
          <S.ErrorText>попробуйте повторить запрос позже!</S.ErrorText>
        </S.ErrorWrap>
      );
  }

  const {users} = useSelector((state) => state.users)

  return (
    <S.Wrap>
      <Search setUserLogin={setUserLogin}/>
      {isLoading ? <Loader /> : users?.length === 0 ? <EmptySearch/> : <UserList/>}
    </S.Wrap>
  )
}

export default MainPage
