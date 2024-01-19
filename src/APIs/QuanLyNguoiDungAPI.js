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
    
export const addUserApi = async (payload) => {
    try {
    const token = localStorage.getItem(TOKEN);

      const response = await fetcher.post("/QuanLyNguoiDung/ThemNguoiDung",payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
  
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };

  export const deleteUserApi = async () => {
  try {
    const token = localStorage.getItem(TOKEN);

    const response = await fetcher.delete(`/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    console.log("response: ", response);
    return response.data;
  } catch (error) {
    throw "Loi";
  }
};

  export const updateUserApi = async () => {
    try {
      const response = await fetcher.put(
        "/QuanLyNguoiDung/CapNhatThongTinNguoiDung"
      );
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };
  
  export const searchUserApi = async (tuKhoa) => {
    try {
      const response = await fetcher.get("/QuanLyNguoiDung/TimKiemNguoiDung",
      {
          params: {
              MaNhom: GROUP_CODE,
              tuKhoa: tuKhoa
          },
      });
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };