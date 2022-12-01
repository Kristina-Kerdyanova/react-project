import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { MainTemplate } from '../components/MainTemplate/MainTemplate'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate/>} />
      <Route index element={<Header/>}/>
    </Routes>
  )
}
