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
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { getListUserApi, addUserApi, deleteUserApi, updateUserApi, searchUserApi } from '../../APIs/QuanLyNguoiDungAPI';

const MainContent = styled(Container)({
  marginLeft: '140px',
  padding: '16px',
});

  export const AdminPage = () => {
    const [newUserName, setNewUserName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const { isFetching, error, data } = useQuery({
      queryKey: ['ListUser'],
      queryFn: () => getListUserApi(),
  });

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  

  const handleDeleteUser = async (taiKhoan) => {
    try {
      await deleteUserApi(taiKhoan);
      // Refetch user data after deletion
      refetch();
    } catch (error) {
      console.error('Error deleting user:', error);
  
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  
  
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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            navigate(`/add-user`);
          }}
          style={{ marginRight: '16px' }}
        >
          Thêm Người Dùng
        </Button>

        {/* Chức năng tìm kiếm người dùng */}
        <TextField
          label="Tìm kiếm"
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
          Tìm kiếm
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
              {data?.map((user) => (
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

export default AdminPage;
