import * as S from './styles'

import Search from '../../components/search/Search'
import UserList from '../../components/userList/userList'
import PaginationComp from '../../components/pagination/PaginatonComp'
import SortComponent from '../../components/sortComp/SortComponent'
import Loader from '../../components/loader/loader'
import EmptySearch from '../../components/emptySearch/EmptySearch'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLazyGetUsersQuery } from '../../store/Api/usersApi'
import { setUsers, setTotalUsers} from '../../store/slices/usersSlice'

function MainPage({ order, setOrder, page, setPage }) {
  const [usersList, setUsersList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [textError, setTextError] = useState('')

  const dispatch = useDispatch()

  const { userLogin } = useSelector((state) => state.users)
  const [getUsers, { isError }] = useLazyGetUsersQuery()

  const fetchDataUsers = async () => {
    try {
      setIsLoading(true)
      const response = await getUsers({
        userLogin,
        order,
        page,
      })

      const responseData = response.data

      if (responseData) {
        dispatch(setUsers(responseData.items))
        dispatch(setTotalUsers(responseData.total_count))
        setUsersList(responseData.items)
      }
    } catch (error) {
      setTextError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  //вызов функции при изменении параметров
  useEffect(() => {
    if (userLogin) {
      fetchDataUsers()
    } else {
    // Очищаем массив юзеров при очищении инпута поиска
    //ставим остальные параметраы в дефолтное состояие
    dispatch(setUsers([]))
    dispatch(setTotalUsers([]))
    setUsersList([])
    setOrder('desc')
    setPage(1)
    }
  }, [userLogin, page, order])

  if (isError) {
    return (
      <S.ErrorWrap>
        <S.ErrorText>Что-то пошло не так,</S.ErrorText>
        <S.ErrorText>попробуйте повторить запрос позже!</S.ErrorText>
        <S.ErrorText>{textError}</S.ErrorText>
      </S.ErrorWrap>
    )
  }

  return (
    <S.Wrap>
      <Search />
      <SortComponent setOrder={setOrder} />
      {isLoading ? (
        <Loader />
      ) : usersList?.length === 0 && userLogin !== '' ? (
        <EmptySearch />
      ) : (
        <UserList />
      )}
      {usersList?.length !== 0 && (
        <PaginationComp page={page} setPage={setPage} />
      )}
    </S.Wrap>
  )
}

export default MainPage
