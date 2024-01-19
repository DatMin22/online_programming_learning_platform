import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserApi } from '../../../APIs/QuanLyNguoiDungAPI';
import { GROUP_CODE } from "../../../constant";


const AddUser = () => {
  const queryClient = useQueryClient();
  const { handleSubmit, register} = useForm({
    defaultValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: GROUP_CODE,
        email: "",
    },
  });
  const { mutate: handleAddUser } = useMutation({
    mutationFn: (payload) => addUserApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries('ListUser');
    },
    onError: (error) => {
      console.error('Error adding user:', error);
    },
  });

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("taiKhoan", formValues.taiKhoan);
    formData.append("matKhau", formValues.matKhau);
    formData.append("hoTen", formValues.hoTen);
    formData.append("soDT", formValues.soDT);
    formData.append("maLoaiNguoiDung", formValues.maLoaiNguoiDung);
    formData.append("email", formValues.email);
    handleAddUser(formData);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Thêm Người Dùng
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Tài khoản"
          {...register('taiKhoan', { required: true })}
        />
        <TextField
          fullWidth
          label="Mật khẩu"
          type="password"
          {...register('matKhau', { required: true })}
        />
        <TextField
          fullWidth
          label="Họ tên"
          {...register('hoTen', { required: true })}
        />
         <TextField
          fullWidth
          label="Số điện thoại"
          {...register('soDt', { required: true })}
        />
        <TextField
          fullWidth
          label="Mã loại người dùng"
          {...register('maLoaiNguoiDung', { required: true })}
        />
        <TextField
          fullWidth
          label="Email"
          {...register('email', { required: true })}
        />
       
        <Button type="submit" variant="contained" color="primary" >
          Thêm Người Dùng
        </Button>
      </form>
    </Container>
  );
};

export default AddUser;
