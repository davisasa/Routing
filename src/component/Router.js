import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import ErrorPage from '../Pages/ErrorPage'
import ServiceDetails from '../Pages/ServiceDetails'
import Details from '../Pages/Details'

export default function Router() {
  return (
    <div>


    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='/ServiceDetails' element={<ServiceDetails/>}/>
    <Route path='*' element={<ErrorPage/>}/>

    </Routes>

    </div>
  )
}
