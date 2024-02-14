import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <S.Wrap>
      <S.Text>
        Страница, на которую вы пытаетесь попасть,
        <br />
        не существует или была удалена.
      </S.Text>
      <S.Text>Перейдите на главную страницу</S.Text>
      <S.SearchButton
        onClick={() => {
          navigate('/')
        }}
      >
        Перейти на главную страницу
      </S.SearchButton>
    </S.Wrap>
  )
}

export default NotFoundPage
