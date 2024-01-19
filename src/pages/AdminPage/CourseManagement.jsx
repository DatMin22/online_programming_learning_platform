import React, { useState, useEffect } from 'react';
import {
  styled,
  Container,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@tanstack/react-query';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { getListCourseAPI, deleteCourseApi} from '../../APIs/QuanLyKhoaHocAPIs';

const MainContent = styled(Container)({
  marginLeft: '140px',
  padding: '16px',
});

export const CourseManagement = () => {
  const navigate = useNavigate();


  const { isFetching, error, data } = useQuery({
    queryKey: ['ListCourse'],
    queryFn: () => getListCourseAPI(),
  });

  const handleDeleteCourse = async (MaKhoaHoc) => {
    try {
      await deleteCourseApi(MaKhoaHoc);
      // Refetch user data after deletion
      refetch();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
      <MainContent>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            navigate(`/add-course`);
          }}
          style={{ marginRight: '16px' }}
        >
          Thêm Khóa Học
        </Button>

        {/* Chức năng tìm kiếm khóa học */}
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={() => {
            navigate(`/course-search`);
          }}
        >
          Tìm kiếm khóa học
        </Button>

        {/* Bảng hiển thị danh sách khóa học */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mã khóa học</TableCell>
                <TableCell>Tên khóa học</TableCell>
                <TableCell>Mô tả</TableCell>
                <TableCell>Lượt xem</TableCell>
                <TableCell>Đánh giá</TableCell>
                <TableCell>Chức năng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((course) => (
                <TableRow key={course.maKhoaHoc}>
                  <TableCell>{course.maKhoaHoc}</TableCell>
                  <TableCell>{course.tenKhoaHoc}</TableCell>
                  <TableCell>{course.moTa}</TableCell>
                  <TableCell>{course.luotXem}</TableCell>
                  <TableCell>{course.danhGia}</TableCell>

                  <TableCell>
                    <Button onClick={() => handleDeleteCourse(course.maKhoaHoc)}>
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainContent>
    </div>
  );
};

export default CourseManagement;
