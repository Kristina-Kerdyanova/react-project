import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { News } from '../components/News/News'
import { Catalog } from '../components/Catalog/Catalog'
import { BodyNavSelect } from '../components/BodyNavSelect/BodyNavSelect'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BodyNavSelect/>} />
      
    </Routes>
  )
}
