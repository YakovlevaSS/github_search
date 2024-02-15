import * as S from './styles'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

function UserInfoPage() {
  const {users} = useSelector((state) => state.users)
  console.log(users)
  const { id } = useParams()
  console.log(id)
  let user = null;
  if (Array.isArray(users)) {
    user = users.find((user) => user.id === Number(id));
    console.log(user);
  }
  console.log(user)
  return (
    <S.Wrap>
      <S.Card>
        <S.Avatar>
          <S.Img alt="avatar" src={user.avatar_url} />
        </S.Avatar>
        <S.Info>
            <S.TextBig>Подробная информация о пользователе</S.TextBig>
          <S.InfoBlog>
            <S.TextLable>Логин</S.TextLable>
            <S.Text>{user.login}</S.Text>
          </S.InfoBlog>

          <S.InfoBlog>
          </S.InfoBlog>
        </S.Info>
      </S.Card>
    </S.Wrap>
  )
}

export default UserInfoPage
