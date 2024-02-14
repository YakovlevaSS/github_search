import * as S from './styles'
import { useParams } from 'react-router'
import { date } from '../../components/utitits/mock'

function UserInfoPage() {
  const users = date
  console.log(users)
  const { id } = useParams()
  console.log(id)
  const user = users.find((user) => user.id === Number(id))
  console.log(user)
  return (
    <S.Wrap>
      <S.Card>
        <S.Avatar>
          <S.Img alt="avatar" src={user.owner.avatar_url} />
        </S.Avatar>
        <S.Info>
            <S.TextBig>Подробная информация о пользователе</S.TextBig>
          <S.InfoBlog>
            <S.TextLable>Логин</S.TextLable>
            <S.Text>{user.owner.login}</S.Text>
          </S.InfoBlog>

          <S.InfoBlog>
            <S.TextLable>Имя пользователя</S.TextLable>
            <S.Text>{user.name}</S.Text>
          </S.InfoBlog>
        </S.Info>
      </S.Card>
    </S.Wrap>
  )
}

export default UserInfoPage
