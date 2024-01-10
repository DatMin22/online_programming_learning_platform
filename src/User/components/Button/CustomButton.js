import { Button, styled } from '@mui/material'


export const CustomButton = styled(Button)({
    background: '#009b5d',
    border: '1px solid #009b5d',
    color: '#fff',
    fontWeight: 700,
    fontSize: '14px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.308)',
    '&:hover': {
        backgroundColor: '#009b5ded',
        border: 'none'
    },
    


})


