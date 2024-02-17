import * as S from './styles'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Pagination from 'react-js-pagination'

const PaginationComp = ({ page, setPage }) => {

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  const { totalUsers } = useSelector((state) => state.users)
 let totalUsersNumber = parseInt(totalUsers, 10)

   // Проверка и установка максимального значения 1000 поскольку апи гитхаба возвращает максимум 1000 значений и при переходе на последнюю страницу в пагинации может возникать ошибка
   if (totalUsersNumber > 1000) {
    totalUsersNumber = 1000;
  }

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




