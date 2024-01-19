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
import {searchCourseByNameAPI } from '../../APIs/QuanLyKhoaHocAPIs';

const MainContent = styled(Container)({
  marginLeft: '140px',
  padding: '16px',
});

  export const CourseSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSearchButtonClick = async () => {
    try {
      const searchResultsData = await searchCourseByNameAPI(searchTerm);
      setCourses(searchResultsData);
    } catch (error) {
      console.error('Error searching course:', error);
    }
  };

  return (
    <div>
      <MainContent>

        {/* Chức năng tìm kiếm khóa học */}
        <TextField
          label="Nhập vào từ khóa tìm kiếm"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '16px' }}
        />
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={handleSearchButtonClick}
        >
          Search
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
              {courses?.map((course) => (
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

export default CourseSearch;
