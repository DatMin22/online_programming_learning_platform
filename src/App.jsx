import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import UserLayout from './layouts/UserLayout'

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>


        {/* Nest Router */}
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage />} />

          {/* <Route path={PATH.CHANGE_PASSWORD} element={<ChangePass />} /> */}




          {/* Dynamic segments */}
          {/* <Route path='animal/:id' element={<AnimalDetails />} /> */}
        </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
