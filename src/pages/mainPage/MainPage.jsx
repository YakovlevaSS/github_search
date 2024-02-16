import * as S from './styles'

import Search from '../../components/search/Search'
import UserList from '../../components/userList/userList'
import PaginationComp from '../../components/pagination/PaginatonComp'
import SortComponent from '../../components/sortComp/SortComponent'
import Loader from '../../components/loader/loader'
import EmptySearch from '../../components/emptySearch/EmptySearch'

import { useState, useEffect } from 'react'
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
  if (error) {
    return (
      <S.ErrorWrap>
        <S.ErrorText>Что-то пошло не так,</S.ErrorText>
        <S.ErrorText>попробуйте повторить запрос позже!</S.ErrorText>
      </S.ErrorWrap>
    )
  }

  dispatch(setUsers(data?.items))
  dispatch(setTotalUsers(data?.total_count))
  const users = data?.items

//   useEffect(() => {
//     dispatch(setUsers(data?.items));
//     dispatch(setTotalUsers(data?.total_count));
// }, [userLogin, data, page, dispatch]);
// const {users} = useSelector((state) => state.users)

  return (
    <S.Wrap>
      <Search setUserLogin={setUserLogin} />
      <SortComponent setOrder={setOrder} />
      {isLoading ? (
        <Loader />
      ) : users?.length === 0 ? (
        <EmptySearch />
      ) : (
        <UserList />
      )}
      <PaginationComp page={page} setPage={setPage} />
    </S.Wrap>
  )
}

export default MainPage
