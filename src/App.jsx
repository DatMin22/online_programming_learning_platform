import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import UserLayout from './layouts/UserLayout'
import ChiTietKhoaHoc from './User/modules/ChiTietKhoaHoc'
import { PATH } from './routes/path'
import DanhSachKhoaHocTheoDanhMuc from './User/modules/DanhSachKhoaHocTheoDanhMuc'
import SearchCourse from './User/SearchCourse'
import Login from './User/modules/Login/Login'
import "./App.css";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { SelectPage } from './pages/AdminPage/SelectPage'
import CourseManagement from './pages/AdminPage/CourseManagement'
import AddUser from './Admin/modules/AddUser/AddUser'
import AddCourse from './Admin/modules/AddUser/AddCourse'
import UserSearch from './Admin/AdminSearch/UserSearch'
import CourseSearch from './Admin/AdminSearch/CourseSearch'


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
        <Route path={PATH.LOGIN} element={<Login />} />

        {/* GIAO DIỆN ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<SelectPage />} />
        </Route>
        <Route path="/admin/quanlynguoidung" element={<AdminPage />} />
        <Route path="/admin/quanlykhoahoc" element={<CourseManagement />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/user-search" element={<UserSearch />} />
        <Route path="/course-search" element={<CourseSearch />} />










      </Routes >

    </BrowserRouter >
  );
}

export default App;
