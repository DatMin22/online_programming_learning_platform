import React from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCourseApi } from '../../../APIs/QuanLyKhoaHocAPIs';
import { GROUP_CODE } from "../../../constant";

const AddCourse = () => {
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: GROUP_CODE,
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
  });

  const { mutate: handleAddCourse } = useMutation({
    mutationFn: (payload) => addCourseApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries('ListCourse');
    },
    onError: (error) => {
      console.error('Error adding course:', error);
    },
  });

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("maKhoaHoc", formValues.maKhoaHoc);
    formData.append("biDanh", formValues.biDanh);
    formData.append("tenKhoaHoc", formValues.tenKhoaHoc);
    formData.append("moTa", formValues.moTa);
    formData.append("luotXem", formValues.luotXem);
    formData.append("danhGia", formValues.danhGia);
    formData.append("hinhAnh", formValues.hinhAnh);
    formData.append("maNhom", formValues.maNhom);
    formData.append("ngayTao", formValues.ngayTao);
    formData.append("maDanhMucKhoaHoc", formValues.maDanhMucKhoaHoc);
    formData.append("taiKhoanNguoiTao", formValues.taiKhoanNguoiTao);

    handleAddCourse(formData);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Thêm Khóa Học
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Mã Khóa Học"
          {...register('maKhoaHoc', { required: true })}
        />
        <TextField
          fullWidth
          label="Bí Danh"
          {...register('biDanh', { required: true })}
        />
        <TextField
          fullWidth
          label="Tên Khóa Học"
          {...register('tenKhoaHoc', { required: true })}
        />
        <TextField
          fullWidth
          label="Mô Tả"
          {...register('moTa', { required: true })}
        />
        <Button type="submit" variant="contained" color="primary" >
          Thêm Khóa Học
        </Button>
      </form>
    </Container>
  );
};

export default AddCourse;
