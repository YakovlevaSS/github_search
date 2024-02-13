import * as S from './styles'


const Search = () => {
    const handleSearch = () => {
      alert('Выполняем поиск...');
      // Дополнительная логика поиска
    };
  
    return (
      <S.SearchContainer>
        <S.Input
          type="text"
          placeholder="Введите запрос..."
        //   onChange={(e) => onSearch(e.target.value)}
        />
        <S.SearchButton onClick={handleSearch}>Поиск</S.SearchButton>
      </S.SearchContainer>
    );
  };
  
  export default Search;