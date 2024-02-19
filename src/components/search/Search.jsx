import * as S from './styles'

const Search = ({ setUserLogin, userLogin}) => {
  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="Введите ваш запрос..."
        value={userLogin}
        onChange={(event) => {
          setUserLogin(event.target.value)
        }}
      />
    </S.SearchContainer>
  )
}

export default Search
