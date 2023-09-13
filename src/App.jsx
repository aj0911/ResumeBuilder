import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Resume' Component={Resume}/>
      </Routes>
    </>
  )
}
