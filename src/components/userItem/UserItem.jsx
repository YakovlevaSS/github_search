import * as S from './styles'

const UserItem = ({ user }) => {
  return (
    <S.Item>
      <S.Avatar>
      <S.Img alt="avatar" src={user.avatar_url}/>
      </S.Avatar>
      <S.Login>{user.login}</S.Login>
    </S.Item>
  )
}

export default UserItem
