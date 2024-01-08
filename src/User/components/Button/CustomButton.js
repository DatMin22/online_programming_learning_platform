import { Button, styled } from '@mui/material'


export const CustomButton = styled(Button)({
    background: '#009b5d',
    border: '1px solid #009b5d',
    color: '#fff',
    fontWeight: 700,
    fontSize:'14px',
    '&:hover': {
        backgroundColor: '#009b5ded',
        border:'none'
    },
})


