import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { setUserLogin } from '../../store/slices/usersSlice'

const Search = () => {
  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state.users)
  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="Введите ваш запрос..."
        value={userLogin}
        onChange={(event) => {
          dispatch(setUserLogin(event.target.value))
        }}
      />
    </S.SearchContainer>
  )
}

export default Search
