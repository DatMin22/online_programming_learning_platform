import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { searchCourseByNameAPI } from '../../APIs/QuanLyKhoaHocAPIs'
import { useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import { CustomButton } from '../components/Button/CustomButton'

const SearchCourse = () => {
    const { tenKhoaHoc } = useParams()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    console.log('tenKhoaHoc: ', tenKhoaHoc)
    useEffect(() => {
        searchCourseByNameAPI(tenKhoaHoc).then((response) => {
            console.log('response: ', response)
            setData(response)
            setError(null)
        }).catch(() => {
            setError(`Không tìm thấy khóa học '${tenKhoaHoc}'`)
        })
    }, [tenKhoaHoc])

    return (
        <div>
            <Container sx={{ marginTop: '10rem',height:'max-content' }}>
                {error == null && <Typography style={{ fontSize: '3rem' }}>Đã tìm thấy các khóa học '{tenKhoaHoc}'</Typography>}
                <Grid container >
                    {error == null ? (

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

                                        <Stack direction={'row'} spacing={2}>

                                            <Typography sx={{
                                                color: '#747c82',
                                                fontSize: '12px'
                                            }} ><i class="fa-solid fa-clock" style={{ margin: '0 .5rem' }}></i>2-4 tiếng</Typography>
                                            <Typography sx={{
                                                color: '#747c82',
                                                fontSize: '12px'
                                            }} ><i class="fa-solid fa-graduation-cap" style={{ margin: '0 .5rem' }}></i>{item.soLuongHocVien} Học viên</Typography>

                                        </Stack>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0.8rem' }}>
                                        <CustomButton variant='outlined' fullWidth
                                            onClick={() => { navigate(`/chiTietKhoaHoc/${item.maKhoaHoc}`) }}>Chi tiết</CustomButton>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )

                        )
                    ) : (<Container className='' style={{ textAlign: 'center', fontSize: '3rem', color: '#909090' }}>{error}</Container>)

                    }

                </Grid>
            </Container ></div>
    )
}

export default SearchCourse