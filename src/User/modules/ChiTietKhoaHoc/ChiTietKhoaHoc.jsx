import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/Button/CustomButton'
import Header from '../../components/Header'
import { getCourseByMaKhoaHocAPI } from '../../../APIs/QuanLyKhoaHocAPIs'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const ChiTietKhoaHoc = () => {
    const { maKhoaHoc } = useParams()
    const { isPending, error, data } = useQuery({
        queryKey: ['CourseDetail'],
        queryFn: () => getCourseByMaKhoaHocAPI(maKhoaHoc),
    })
    console.log('data: ', data);

    return (
        <>
            <Header />
            <Container sx={{ marginTop: '10rem' }}>
                <Stack direction={'row'}>
                    <Card sx={{ margin: '.5rem', maxWidth: '100%', borderRadius: '12px' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={data?.hinhAnh}
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
                                {data?.tenKhoaHoc}
                            </Typography>

                            <Stack direction={'row'} spacing={2}>

                                <Typography sx={{
                                    color: '#747c82',
                                    fontSize: '12px'
                                }} ><i class="fa-solid fa-clock" style={{ margin: '0 .5rem' }}></i>2-4 tiếng</Typography>
                                <Typography sx={{
                                    color: '#747c82',
                                    fontSize: '12px'
                                }} ><i class="fa-solid fa-graduation-cap" style={{ margin: '0 .5rem' }}></i>1,242 Học viên</Typography>

                            </Stack>
                        </CardContent>
                        <CardActions sx={{ padding: '0.8rem' }}>
                            <CustomButton variant='outlined' fullWidth
                                onClick={() => { navigate('chiTietKhoaHoc') }}>Tham gia </CustomButton>
                        </CardActions>
                    </Card>


                    {/* chitiet */}
                    <Card sx={{ margin: '.5rem', width: '100%', maxWidth: '100%', borderRadius: '12px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{
                                    fontSize: '24px',
                                    color: '#1b232e',

                                    fontWeight: '700',
                                    lineHeight: '32px',
                                    marginBottom: '6px'
                                }}>
                                {data?.tenKhoaHoc}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data?.moTa}

                            </Typography>
                        </CardContent>
                        <CardActions sx={{ padding: '0.8rem' }}>
                            {/* <Button variant='outlined' fullWidth sx={{borderRadius:'8px'}}>Xem them</Button> */}
                            <CustomButton variant='outlined'
                                onClick={() => { navigate('chiTietKhoaHoc') }}>Tham gia khóa học</CustomButton>
                        </CardActions>
                        <div className='kienThucHocDuoc'>
                            <img className='kienThucHocDuoc_img' src="/svg/top-guy.svg" alt="" />

                        </div>
                    </Card>
                </Stack>
            </Container>
        </>
    )
}

export default ChiTietKhoaHoc