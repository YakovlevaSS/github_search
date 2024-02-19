import * as S from './styles'
import { useParams } from 'react-router'
import { useGetUserInfoQuery } from '../../store/Api/usersApi'
import DateFormatter from '../../components/utitits/dateFormater'
import Loader from '../../components/loader/loader'

function UserInfoPage() {
  const { login } = useParams()

  const { data, error, isLoading } = useGetUserInfoQuery({
    login,
  })
  const formatedCreatedDate = DateFormatter(data?.created_at)

  if (error) {
    return (
      <S.ErrorWrap>
        <S.ErrorText>Что-то пошло не так,</S.ErrorText>
        <S.ErrorText>попробуйте повторить запрос позже!</S.ErrorText>
      </S.ErrorWrap>
    )
  }

  return (
    <S.Wrap>
      <S.Card>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <S.Avatar>
              <S.Img alt="avatar" src={data?.avatar_url} />
            </S.Avatar>
            <S.Info>
              <S.TextBig>Подробная информация о пользователе</S.TextBig>
              <S.InfoBlog>
                <S.TextLable>Логин</S.TextLable>
                <S.Text>{data?.login}</S.Text>
              </S.InfoBlog>
              <S.InfoBlog>
                <S.TextLable>Описание профиля</S.TextLable>
                <S.Text>{data?.bio}</S.Text>
              </S.InfoBlog>
              <S.InfoBlog>
                <S.TextLable>Дата создания профиля</S.TextLable>
                <S.Text>{formatedCreatedDate}</S.Text>
              </S.InfoBlog>
              <S.InfoBlog>
                <S.TextLable>Колличество публичных репозиториев</S.TextLable>
                <S.Text>{data?.public_repos}</S.Text>
              </S.InfoBlog>
            </S.Info>
          </>
        )}
      </S.Card>
    </S.Wrap>
  )
}

export default UserInfoPage
