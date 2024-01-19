import React, { useState, useEffect } from 'react';
import {
  styled,
  IconButton,
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import {  searchUserApi } from '../../APIs/QuanLyNguoiDungAPI';

const MainContent = styled(Container)({
  marginLeft: '140px',
  padding: '16px',
});

  export const UserSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  
  const handleSearch = async () => {
    try {
      const searchResultsData = await searchUserApi(searchTerm);
      setUsers(searchResultsData); 
    } catch (error) {
      console.error('Error searching user:', error);
    }
  };

  return (
    <div>
      <MainContent>
        {/* Chức năng tìm kiếm người dùng */}
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
          onClick={handleSearch}
        >
        </Button>

        {/* Bảng hiển thị danh sách người dùng */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>SĐT</TableCell>
                <TableCell>Chức năng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.taiKhoan}>
                  <TableCell>{user.taiKhoan}</TableCell>
                  <TableCell>{user.hoTen}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.soDt}</TableCell>

                  <TableCell>
                    <IconButton onClick={() => handleEditUser(user.maLoaiNguoiDung)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteUser(user.taiKhoan)}>
                      <DeleteIcon />
                    </IconButton>
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

export default UserSearch;
