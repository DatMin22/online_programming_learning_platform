import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Lottie from 'react-lottie';
import bannerDanhMuc from '../../../lotties/frontend.json'
import { useParams } from 'react-router-dom';
const BannerDanhMuc = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bannerDanhMuc,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const { maDanhMuc } = useParams()
    const nameDanhMuc = () => {
        if (maDanhMuc == 'TuDuy') {
            return 'Các khóa học về tư duy lập trình'
        }
        if (maDanhMuc == 'Design') {
            return 'Các khóa học về thiết kế Website'

        }
        if (maDanhMuc == 'BackEnd') {
            return 'Các khóa học về lập trình BackEnd'

        }
        if (maDanhMuc == 'DiDong') {
            return 'Các khóa học về lập trình di động'

        }
        if (maDanhMuc == 'FrontEnd') {
            return 'Các khóa học về lập trình FrontEnd'

        }
        if (maDanhMuc == 'FullStack') {
            return 'Các khóa học về lập trình FullStack'

        }
    }
    return (
        <div className='bgdanhMuc' style={{
            
        }}>

            <Box maxHeight={'300px'} width={'90%'} margin={'auto'} >
                <Stack direction={'row'} marginTop={'5rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box sx={{
                        paddingLeft: '.5rem'
                    }}>
                        <Typography sx={{ fontSize: '5rem', color: '#fff' }}>
                            {nameDanhMuc()}
                        </Typography>

                        {/* <button className='button' style={{ marginTop: '1rem' }} >Tham gia</button> */}
                    </Box>
                    <Lottie options={defaultOptions} width={'30%'} />
                </Stack>
                {/* <div className="bg"></div> */}
            </Box>
        </div>
    )
}

export default BannerDanhMuc