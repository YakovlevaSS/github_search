import * as S from './styles'
import { useSelector } from 'react-redux'
import Pagination from 'react-js-pagination'

const PaginationComp = ({ page, setPage }) => {
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  const { totalUsers } = useSelector((state) => state.users)
  const totalUsersNumber = parseInt(totalUsers, 10)

  return (
    <S.Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={12} // Количество элементов на странице
        totalItemsCount={totalUsersNumber} // Общее количество элементов
        pageRangeDisplayed={7} // Количество отображаемых страниц в пагинации
        onChange={handlePageChange}
        innerClass={"pagination"} //класс для обертки пагинации
        activeClass={"active"} //класс для активной страницы
      />
    </S.Container>
  )
}
export default PaginationComp




