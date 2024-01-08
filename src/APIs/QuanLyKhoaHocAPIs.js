import { GROUP_CODE } from "../constant";
import fetcher from "./fetcher";

export const getListCategoryCourseAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
        console.log('response: ', response)
        //payload = {taikhoan, matkhau, ....}
        return response.data;
    } catch (error) {
        throw "Loi";
    }
}
export const getListCourseAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
            {
                params: {
                    MaNhom: GROUP_CODE,
                },
            });
        console.log('response: ', response)
        return response.data;
    } catch (error) {
        throw "Loi";
    }
}