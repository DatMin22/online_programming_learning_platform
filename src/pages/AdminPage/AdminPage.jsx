import React, { useState } from 'react';
import {
  styled,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
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
import { getListUserApi, addUserApi, deleteUserApi, updateUserApi, searchUserApi } from '../../APIs/QuanLyNguoiDungAPI';

const MainContent = styled(Container)({
  marginLeft: '240px',
  padding: '16px',
});

export const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { isFetching, error, data: userData } = useQuery({
    queryKey: ['ListUser'],
    queryFn: () => getListUserApi(),
});

  const handleAddUser = async () => {
    try {
      await addUserApi();
      const newData = await getListUserApi();
      setUsers(newData);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  const handleDeleteUser = async (taiKhoan) => {
    try {
      await deleteUserApi(taiKhoan);
      refetch();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (taiKhoan) => {
    console.log(`Edit user with ID: ${taiKhoan}`);
  };

  const handleSearch = async () => {
    try {
      const searchData = await searchUserApi();
      setUsers(searchData);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div>

      <MainContent>
        {/* Chức năng thêm người dùng */}
        <TextField
          label="Tên người dùng"
          variant="outlined"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddUser}
          style={{ marginRight: '16px' }}
        >
          Thêm
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
              {users.map((user) => (
                <TableRow key={user.maLoaiNguoiDung}>
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
