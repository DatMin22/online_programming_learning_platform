import { GROUP_CODE } from "../constant";
import fetcher from "./fetcher";


export const getListUserApi = async () => {
    try {
      const response = await fetcher.get(
        "/QuanLyNguoiDung/LayDanhSachNguoiDung",
        {
          params: {
            MaNhom: GROUP_CODE,
          },
        }
      );
  
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };
    
export const addUserApi = async () => {
    try {
      const response = await fetcher.get("/QuanLyNguoiDung/ThemNguoiDung");
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };
  
export const deleteUserApi = async (taiKhoan) => {
    try {
      const response = await fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
        data: { taiKhoan }, 
      });
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };
  
  export const updateUserApi = async () => {
    try {
      const response = await fetcher.get(
        "/QuanLyNguoiDung/CapNhatThongTinNguoiDung"
      );
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };
  
  export const searchUserApi = async () => {
    try {
      const response = await fetcher.get("/QuanLyNguoiDung/TimKiemNguoiDung");
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };