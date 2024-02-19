import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import UserInfoPage from './pages/userInfoPage/UserInfoPage'
import MainPage from './pages/mainPage/MainPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

function AppRoutes() {
  const [userLogin, setUserLogin] = useState('')
  return (
    <Routes>
      <Route path="/" element={<MainPage userLogin={userLogin} setUserLogin={setUserLogin}/>} />
      <Route path="/userinfo/:login" element={<UserInfoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
