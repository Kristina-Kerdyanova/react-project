import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../pages/Main'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { MainTemplate } from '../components/MainTemplate/MainTemplate'

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainTemplate />}> */}
      <Route index element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      {/* <Route path="/account" element={<Account/>} />
      <Route path="favorite" element={<Favorite/>} />
      <Route path="search" element={<Search/>} /> */}
      {/* </Route> */}
    </Routes>
  )
}

