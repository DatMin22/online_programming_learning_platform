import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../Button/CustomButton'
import banner from '../../../lotties/Animation1704801029621.json'
import Lottie from 'react-lottie'
import bannerStyle from './banner.module.scss'
const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: banner,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Box height={'max-content'} width={'90%'} margin={'auto'} className={bannerStyle.banner}>
            <Box display={'none'} className={bannerStyle.banner_text}>
                <Typography sx={{ fontSize: '4rem' }} className={bannerStyle.banner_text1} marginTop={'5.5rem'} >
                    Chào mừng đến với D-Learning
                </Typography>
                <Typography sx={{
                    color: '#747c82',
                    fontSize: '1.1rem',
                    textTransform: 'unset'

                }}>
                    Nền tảng học lập trình trực tuyến
                </Typography>
                <button className={bannerStyle.button} style={{ marginTop: '1rem' }} >Tham gia</button>
            </Box>
            <Stack direction={'row'} marginTop={'5rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{
                    paddingLeft: '.5rem'
                }} className={bannerStyle.banner__left}>
                    <Typography sx={{ fontSize: '4rem' }} className={bannerStyle.banner__left__title}>
                        Chào mừng đến với D-Learning
                    </Typography>
                    {/* <img src="./images/D-Learning.png" alt="" /> */}
                    <Typography sx={{
                        color: '#747c82',
                        fontSize: '1.1rem',
                        textTransform: 'unset'

                    }}>
                        Nền tảng học lập trình trực tuyến
                    </Typography>
                    <button className={bannerStyle.button} style={{ marginTop: '1rem' }} >Tham gia</button>
                </Box>
                <div className={bannerStyle.banner__right}>

                    <Lottie options={defaultOptions} width={'100%'} />
                </div>
                {/* <img src="/images/3818436.jpg" alt="" width={'60%'} height={'100%'} /> */}
            </Stack>
            <div className={bannerStyle.bg}></div>
        </Box>
    )
}

export default Banner