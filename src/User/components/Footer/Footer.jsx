import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0b2441'
                // (theme) =>
                //     theme.palette.mode === "light"
                //         ? theme.palette.grey[200]
                //         : theme.palette.grey[800]
                ,
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <img src="/images/D-Learning.png" width={200} alt="logo-DLearning" />
                        <Typography variant="h6" color="text.primary" sx={{ color: '#e3e3e3' }} gutterBottom>
                            Về chúng tôi
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#e3e3e3c7' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quae.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" sx={{ color: '#e3e3e3' }} gutterBottom>
                            Liên Hệ
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#e3e3e3c7' }}>
                            15 Đường số 6, Phường 15, Gò Vấp, Hồ Chí Minh
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#e3e3e3c7' }}>
                            Email: quangDat2219@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#e3e3e3c7' }}>
                            Số điện thoại: +1 234 567 8901
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" sx={{ color: '#e3e3e3' }} gutterBottom>
                            Theo dõi chúng tôi
                        </Typography>
                        <Link href="#" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="#"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="#" color="inherit">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="#">
                            Website của tôi
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer