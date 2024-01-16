import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Paper, Stack, Typography, styled } from '@mui/material'
import React, { Children } from 'react'
import { getListCourseAPI } from '../../../APIs/QuanLyKhoaHocAPIs'
import { useQuery } from '@tanstack/react-query'
import { CustomButton } from '../../components/Button/CustomButton'
import { useNavigate } from 'react-router-dom'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))
const DanhSachKhoaHoc = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['ListCourse'],
        queryFn: () => getListCourseAPI(),
    })
    const navigate = useNavigate()
    return (
        <Container >
            <Grid container >
                {
                    data?.map((item) => (
                        <Grid xs={12} md={3} sm={4} key={item.maKhoaHoc} gap={4}>
                            <Card sx={{ margin: '.5rem', maxWidth: '100%', borderRadius: '12px' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={item.hinhAnh}
                                    sx={{ margin: '1rem' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            fontSize: '14px',
                                            color: '#1b232e',

                                            fontWeight: '500',
                                            lineHeight: '21px',
                                            marginBottom: '5px'
                                        }}>
                                        {item.tenKhoaHoc}
                                        {/* Food Safety Training - Safe Practices and Procedures */}
                                    </Typography>
                                    {/* <Divider sx={{ my: 0.5 }} /> */}
                                    {/* <Typography variant="body2" color="text.secondary">
                                        {item.moTa}
                                    </Typography> */}
                                    <Stack direction={'row'} spacing={2}>

                                        <Typography sx={{
                                            color: '#747c82',
                                            fontSize: '12px'
                                        }} ><i class="fa-solid fa-clock" style={{ margin: '0 .5rem' }}></i>2-4 tiếng</Typography>
                                        <Typography sx={{
                                            color: '#747c82',
                                            fontSize: '12px'
                                        }} ><i class="fa-solid fa-graduation-cap" style={{ margin: '0 .5rem' }}></i>{item.soLuongHocVien} Học viên</Typography>
                                        {/* <Typography sx={{
                                            color: '#747c82',
                                            fontSize: '12px'
                                        }} ><i class="fa-solid fa-graduation-cap" style={{ margin: '0 .5rem' }}></i>Lượt xem {item.luotXem}</Typography> */}

                                    </Stack>
                                </CardContent>
                                <CardActions sx={{ padding: '0.8rem' }}>
                                    {/* <Button variant='outlined' fullWidth sx={{borderRadius:'8px'}}>Xem them</Button> */}
                                    <CustomButton variant='outlined' fullWidth
                                        onClick={() => { navigate(`chiTietKhoaHoc/${item.maKhoaHoc}`) }}>Chi tiết</CustomButton>
                                </CardActions>
                            </Card>
                        </Grid>

                    )

                    )
                }

            </Grid>
        </Container >
    )
}

export default DanhSachKhoaHoc