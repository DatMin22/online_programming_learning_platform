import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { filterCourseByCategoryIdAPI, getCourseByMaKhoaHocAPI } from '../../../APIs/QuanLyKhoaHocAPIs'
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import { CustomButton } from '../../components/Button/CustomButton'
import Header from '../../components/Header'
import BannerDanhMuc from '../../components/BannerDanhMuc'

const DanhSachKhoaHocTheoDanhMuc = () => {
    const { maDanhMuc } = useParams()
    console.log('maDanhMuc: ', maDanhMuc)
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['DanhSachKhoaHocTheoDanhMuc'],
    //     queryFn: () => filterCourseByCategoryIdAPI(maDanhMuc),

    // })
    console.log('data: ', data)
    useEffect(() => {
        filterCourseByCategoryIdAPI(maDanhMuc).then((response) => {
            setData(response)

        })
    }, [maDanhMuc])
    return (
        <>
            {/* <Header /> */}
            <BannerDanhMuc />
            <Container sx={{ marginTop: '10rem' }}>
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
                                            onClick={() => { navigate(`/chiTietKhoaHoc/${item.maKhoaHoc}`) }}>Chi tiết</CustomButton>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )

                        )
                    }

                </Grid>
            </Container >
        </>

    )
}

export default DanhSachKhoaHocTheoDanhMuc