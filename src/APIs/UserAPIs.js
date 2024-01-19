// import { CURRENT_USER } from "../constant";

import { Navigate, useNavigate } from "react-router-dom";
import { CURRENT_USER, TOKEN } from "../constant";
import fetcher from "./fetcher";
import { PATH } from "../routes/path";
export const LoginAPI = async (payload) => {
  try {
    const response = await fetcher.post("QuanLyNguoiDung/DangNhap", payload)
    console.log('response: ', response)
    // response.then((res) => {
    //   console.log('res: ', res)
    if (response.status == 200) {
      // alert(response.status)
      // localStorage.setItem(TOKEN, JSON.stringify(response.data.accessToken))
      return response
    }

    // })
    //   .catch((error) => {
    //     alert(error)
    //   })
    // console.log('response: ', response)
    //payload = {taikhoan, matkhau, ....}

  } catch (error) {
    // quăng lỗi
    console.log('error: ', error.response.data)
    throw error.response.data
    return error.response.data

  }
}
export const registerAPI = async (payload) => {
  try {
    const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload)
    console.log('response dangky: ', response)
    if (response.status == 200) {
      return response
    }
  } catch (error) {
    throw error.response.data
  }
}


