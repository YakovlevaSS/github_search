import * as S from './styles'
import { useSelector } from 'react-redux'
import Pagination from 'react-js-pagination'

const PaginationComp = ({ page, setPage }) => {
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  const { totalUsers } = useSelector((state) => state.users)
  let totalUsersNumber = parseInt(totalUsers, 10)

  // Проверка и установка максимального значения 1000 поскольку апи гитхаба возвращает максимум 1000 значений и при переходе на последнюю страницу в пагинации может возникать ошибка
  if (totalUsersNumber > 1000) {
    totalUsersNumber = 1000
  }
  //Колличество пользователей, показываемых на странице
  const usersOnPage = 12

  //Колличество страниц, отображаемых в пагинации
  const pageOnPagination = 7

  return (
    <S.Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={usersOnPage}
        totalItemsCount={totalUsersNumber}
        pageRangeDisplayed={pageOnPagination}
        onChange={handlePageChange}
        innerClass={'pagination'} //класс для обертки пагинации
        activeClass={'active'} //класс для активной страницы
      />
    </S.Container>
  )
}
export default PaginationComp
