import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../pages/Main'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart/Cart'
import { Categories } from '../pages/Categories'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="sign-up" element={<Register />} />
      <Route path="cart" element={<Cart/>} />
      <Route path="categories" element={<Categories/>} />
      {/* <Route path="search" element={<Search/>} /> */}
    </Routes>
  )
}

