import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getListCategoryCourseAPI } from '../../../APIs/QuanLyKhoaHocAPIs';
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
const MenuDanhMucKhoaHoc = () => {
    const [danhMuc, setDanhMuc] = useState('');

    const handleChange = (event) => {
        setDanhMuc(event.target.value);
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['ListCategory'],
        queryFn: () => getListCategoryCourseAPI(),
    })
    return (
        <Box sx={{ minWidth: '30%', outline: 'none', border: 'none' }} style={{ border: 'none!important', outline: 'none!important' }}>
            <FormControl fullWidth sx={{ outline: 'none' }} style={{ border: 'none!important', outline: 'none!important' }}>
                <InputLabel id="demo-simple-select-label">Danh mục khóa học</InputLabel>
                <Select
                    style={{ border: 'none!important', outline: 'none!important' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={danhMuc}
                    label="danhMuc"
                    onChange={handleChange}
                // placeholder='Danh mục khóa học'
                // color='red'
                >
                    {data?.map((cate) => (
                        <MenuItem
                            style={{ border: 'none!important', outline: 'none!important' }}

                            key={cate.maDanhMuc}
                            value={cate.tenDanhMuc}
                        >
                            {cate.tenDanhMuc}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default MenuDanhMucKhoaHoc