import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/Button/CustomButton'
import Header from '../../components/Header'

const ChiTietKhoaHoc = () => {
    return (
        <>
            <Header />
            <Container sx={{ marginTop: '10rem' }}>
                <Stack direction={'row'}>
                    <Card sx={{ margin: '.5rem', width: '100%', maxWidth: '100%', borderRadius: '12px' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={'item.hinhAnh'}
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
                                Tên khóa Học
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
                                {/* <Typography sx={{
                                            color: '#747c82',
                                            fontSize: '12px'
                                        }} ><i class="fa-solid fa-graduation-cap" style={{ margin: '0 .5rem' }}></i>Lượt xem {item.luotXem}</Typography> */}

                            </Stack>
                        </CardContent>
                        <CardActions sx={{ padding: '0.8rem' }}>
                            {/* <Button variant='outlined' fullWidth sx={{borderRadius:'8px'}}>Xem them</Button> */}
                            <CustomButton variant='outlined' fullWidth
                                onClick={() => { navigate('chiTietKhoaHoc') }}>Đăng ký</CustomButton>
                        </CardActions>
                    </Card>
                    <Card sx={{ margin: '.5rem', maxWidth: '100%', borderRadius: '12px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{
                                    fontSize: '24px',
                                    color: '#1b232e',

                                    fontWeight: '700',
                                    lineHeight: '32px',
                                    marginBottom: '6px'
                                }}>
                                Tên khóa Học
                                {/* Food Safety Training - Safe Practices and Procedures */}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae amet atque voluptate eaque? Quae id optio quia laudantium ea nam asperiores velit cupiditate. Deleniti blanditiis aut corporis? Blanditiis quo aperiam officia nesciunt aut, accusamus sapiente placeat atque ad? Labore perferendis tenetur voluptatem provident minima, fuga doloremque ipsa sint ducimus natus.
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