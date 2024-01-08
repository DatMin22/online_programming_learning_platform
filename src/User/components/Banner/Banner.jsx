import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../Button/CustomButton'

const Banner = () => {
    return (
        <Box height={'100vh'}>
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
                        textTransform:'unset'

                    }}>
                        Nền tảng học lập trình trực tuyến
                    </Typography>
                    <CustomButton sx={{ paddingX: '1rem', marginTop:'1rem' }}>Bắt đầu</CustomButton>
                </Box>
                <img src="/images/3818436.jpg" alt="" width={'60%'} height={'100%'} />
            </Stack>
        </Box>
    )
}

export default Banner