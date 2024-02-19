import * as S from './styles'

const SortComponent = ({ setOrder }) => {

  return (
    <S.Container>
      <S.Button onClick={() => setOrder('asc')}>
        Фильтровать по возрастанию числа репозиториев
      </S.Button>
      <S.Button onClick={() => setOrder('desc')}>
        Фильтровать по убыванию числа репозиториев
      </S.Button>
    </S.Container>
  )
}

export default SortComponent
