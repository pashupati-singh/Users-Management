import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { AddUser } from '../Components/AddUser'
import { Updateusers } from '../Components/Updateusers'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home />}  />
        <Route path='/add' element = {<AddUser />} />
        <Route path="/update/:id" element = {<Updateusers />} />
    </Routes>
  )
}
