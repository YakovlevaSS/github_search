import * as S from './styles'

const Search = ({ isLoading, setUserLogin  }) => {
  const handleSearch = () => {
    alert('Выполняем поиск...')
    // Дополнительная логика поиска
  }

  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="Введите запрос..."
        onChange={(event) => {
          setUserLogin(event.target.value)
        }}
      />
      <S.SearchButton onClick={handleSearch} disabled={isLoading}>
        {!isLoading ? 'Поиск' : 'Ищем...'}
      </S.SearchButton>
    </S.SearchContainer>
  )
}

export default Search
