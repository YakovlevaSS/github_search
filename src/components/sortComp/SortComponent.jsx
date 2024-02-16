import * as S from './styles'
import { useEffect, useState } from 'react'

const SortComponent = ({ setOrder }) => {
  const [sort, setSort] = useState(true)

  useEffect(() => {
    sort ? setOrder('desc') : setOrder('asc')
  }, [sort])

  return (
    <S.Container>
      <S.Button onClick={() => setSort(!sort)}>
        {sort
          ? 'Фильтровать по убыванию числа репозиториев'
          : 'Фильтровать по возрастанию числа репозиториев'}
      </S.Button>
    </S.Container>
  )
}

export default SortComponent
