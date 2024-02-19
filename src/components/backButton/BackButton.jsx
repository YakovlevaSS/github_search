import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()

  const handleClickNav = () => {
    navigate('/')
  }

  return (
    <S.BackButtonWrapper onClick={handleClickNav}>
      <S.BackArrowIcon>&#8592;</S.BackArrowIcon>
    </S.BackButtonWrapper>
  )
}

export default BackButton
