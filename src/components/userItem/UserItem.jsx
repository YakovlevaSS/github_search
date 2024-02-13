import * as S from './styles'

const UserItem = ({ user }) => {
  return (
    <S.Item>
      <S.Avatar>
      <S.Img alt="avatar" src={user.owner.avatar_url}/>
      </S.Avatar>
      <S.Login>{user.owner.login}</S.Login>
      <S.Name>{user.name}</S.Name>
    </S.Item>
  )
}

export default UserItem
