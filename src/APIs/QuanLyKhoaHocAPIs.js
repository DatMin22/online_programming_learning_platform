import { GROUP_CODE } from "../constant";
import fetcher from "./fetcher";

export const getListCategoryCourseAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
        console.log("response: ", response);
        //payload = {taikhoan, matkhau, ....}
        return response.data;
    } catch (error) {
        throw "Loi";
    }
};
export const getListCourseAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
            {
                params: {
                    MaNhom: GROUP_CODE,
                },
            });
        // console.log('response: ', response.data.slice(0, 10))
        return response.data.slice(0, 10)
    } catch (error) {
        throw "Loi";
    }
}
// chi tiết khóa học
export const getCourseByMaKhoaHocAPI = async (maKhoaHoc) => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc",
            {
                params: {
                    maKhoaHoc: maKhoaHoc,

                },
            });
        console.log('thông tin khóa học: ', response)
        return response.data;
    } catch (error) {
        throw "Loi";
    }
}

// khóa học theo mã dnah mục
export const filterCourseByCategoryIdAPI = async (categoryId) => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",
            {
                params: {
                    maDanhMuc: categoryId,
                    MaNhom: GROUP_CODE
                },
            });
        console.log('khóa học theo dnah mục: ', response)
        return response.data
    } catch (error) {
        throw "Loi";
    }
}
export const searchCourseByNameAPI = async (tenKhoaHoc) => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
            {
                params: {
                    tenKhoaHoc: tenKhoaHoc,
                    MaNhom: GROUP_CODE
                },
            });
        console.log('tìm kiếm khóa học: ', response)
        return response.data
    } catch (error) {
        throw "Loi";
    }
}

export const addCourseApi = async (payload) => {
    try {
        const token = localStorage.getItem(TOKEN);
    
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",payload, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: { maKhoaHoc },
          });
      
          console.log("response: ", response);
          return response.data;
        } catch (error) {
          throw "Loi";
        }
};


export const deleteCourseApi = async (MaKhoaHoc) => {
    try {
      const token = localStorage.getItem(TOKEN);
  
      const response = await fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { MaKhoaHoc },
      });
  
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      throw "Loi";
    }
  };

