import * as S from './styles'

import Search from '../../components/search/Search'
import UserList from '../../components/userList/userList'
function MainPage() {
  return (
    <S.Wrap>
      <Search />
      <UserList />
    </S.Wrap>
  )
}

export default MainPage
