import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    styled,
    Container,
    Button,
  } from '@mui/material';
const MainContent = styled(Container)({
  marginLeft: '450px',
  padding: '16px',
});

  export const SelectPage = () => {
    const navigate = useNavigate();

  return (
    <div>

      <MainContent >
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/admin/quanlynguoidung`);
          }}
          style={{ marginRight: '16px' , padding:'20px 20px'}}
        >
          Quản Lý Người Dùng
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/admin/quanlykhoahoc`);
          }}
          style={{ marginRight: '16px',  padding:'20px 20px' }}
        >
          Quản Lý Khóa Học
        </Button>
        
      </MainContent>
    </div>
  );
};

export default SelectPage;
