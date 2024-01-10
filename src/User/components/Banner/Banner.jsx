import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../Button/CustomButton'
import banner from '../../../lotties/Animation1704801029621.json'
import Lottie from 'react-lottie'
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
        <Box height={'100vh'} width={'90%'} margin={'auto'}>
            <Stack direction={'row'} marginTop={'5rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{
                    paddingLeft: '.5rem'
                }}>
                    <Typography sx={{ fontSize: '5rem' }}>
                        Chào mừng đến với D-Learning
                    </Typography>
                    <Typography sx={{
                        color: '#747c82',
                        fontSize: '1.1rem',
                        textTransform: 'unset'

                    }}>
                        Nền tảng học lập trình trực tuyến
                    </Typography>
                    <button className='button' style={{ marginTop:'1rem' }} >Tham gia</button>
                </Box>
                <Lottie options={defaultOptions} width={'80%'} height={'100%'} />
                {/* <img src="/images/3818436.jpg" alt="" width={'60%'} height={'100%'} /> */}
            </Stack>
            <div className="bg"></div>
        </Box>
    )
}

export default Banner