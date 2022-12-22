import React from 'react'
import { BodyNavSelect } from '../components/BodyNavSelect/BodyNavSelect'
import { Catalog } from '../components/Catalog/Catalog'
import { DetailsItem } from '../components/DetailsItem/DetailsItem'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/NavigationBar/NavigationBar'
import { News } from '../components/News/News'
import { Subscribe } from '../components/Subscribe/Subscribe'

export const Main = () => {
  return (
   <>
   <Header />
   <NavigationBar/>
   <DetailsItem/>
   <BodyNavSelect/>
   <Catalog/>
   <News/>
   <Subscribe/>
   <Footer/>
   </>
  )
}
