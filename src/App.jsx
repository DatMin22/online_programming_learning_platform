import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import UserLayout from './layouts/UserLayout'
import ChiTietKhoaHoc from './User/modules/ChiTietKhoaHoc'
import { PATH } from './routes/path'
import DanhSachKhoaHocTheoDanhMuc from './User/modules/DanhSachKhoaHocTheoDanhMuc'
import SearchCourse from './User/SearchCourse'

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>


        {/* Nest Router */}
        {/* GIAO DIỆN NGƯỜI DÙNG */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<HomePage />} />
          {/* Dynamic segments */}
          <Route path={`/${PATH.DANH_SACH_KHOA_HOC_THEO_DM}/:maDanhMuc/:MaNhom`} element={<DanhSachKhoaHocTheoDanhMuc />} />

          <Route path='chiTietKhoaHoc/:maKhoaHoc' element={<ChiTietKhoaHoc />} />
          <Route path={`/${PATH.TIM_KIEM_KHOA_HOC}/:tenKhoaHoc`} element={<SearchCourse />} />



        </Route>








      </Routes>

    </BrowserRouter>
  )
}

export default App
