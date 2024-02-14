import * as S from './styles'

function EmptySearch() {
  return (
    <S.Wrap>
      <S.Text>
        По данным параметрам пользователи не существуют.
        <br />
        Попробуйте изменить данные запроса.
      </S.Text>
    </S.Wrap>
  )
}

export default EmptySearch
