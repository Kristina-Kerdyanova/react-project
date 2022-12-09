import React from 'react'
import { BodyNavSelect } from '../components/BodyNavSelect/BodyNavSelect'
import { Catalog } from '../components/Catalog/Catalog'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { News } from '../components/News/News'
import { Subscribe } from '../components/Subscribe/Subscribe'

export const Main = () => {
  return (
   <>
   <Header />
   <BodyNavSelect/>
   <Catalog/>
   <News/>
   <Subscribe/>
   <Footer/>
   </>
  )
}
