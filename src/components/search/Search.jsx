import * as S from './styles'

const Search = ({ setUserLogin }) => {
  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="Введите ваш запрос..."
        onChange={(event) => {
          setUserLogin(event.target.value)
        }}
      />
    </S.SearchContainer>
  )
}

export default Search
