import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Avatar, Box, Button, Container, IconButton, InputBase, Menu, MenuItem, Stack, TextField, Toolbar, Tooltip, Typography, alpha, styled } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import MenuDanhMucKhoaHoc from '../MenuDanhMucKhoaHoc';
import { CustomButton } from '../Button/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../../../routes/path';
import header from './header.module.scss'
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const isLogin = true
    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // SEARCH
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#e3e3e3',
        '&:hover': {
            backgroundColor: '#e3e3e3',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#3b3b3b',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <AppBar position="fixed" style={{ backgroundColor: '#fff', boxShadow: 'none' }}>
            <Container maxWidth="xl" sx={{ padding: '1rem' }}>
                <Toolbar disableGutters>
                    <Link
                        style={{
                            margin: '0 1.5rem'
                        }}
                        to={'/'}
                    >
                        <img style={{
                        }} src="/images/D-Learning.png" className={header.logoDLearning} width={200} alt="logo" />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>

                    </Box>
                    <Link

                        style={{
                            mr: 4,
                            // display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        to={'/'}
                    >
                        <img src="/images/DL.png" width={50} alt="" className={header.logoDL} />
                    </Link>
                    <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around', alignItems: 'center' }}>
                        <MenuDanhMucKhoaHoc />

                        <form className="group" style={{ width: '100%' }}
                            onSubmit={(event) => {
                                event.preventDefault()
                                navigate(`/${PATH.TIM_KIEM_KHOA_HOC}/${searchValue}`)

                            }}>
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" /></g></svg>
                            <input placeholder="Tìm kiếm" type="search"
                                value={searchValue}
                                onChange={(event) => {
                                    setSearchValue(event.target.value)
                                }} className="input" />
                        </form>


                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Stack direction={'row'} spacing={2} style={{ display: isLogin ? "none" : "flex" }}>
                            <CustomButton variant='contained' sx={{ width: 'max-content' }} >Đăng nhập </CustomButton>
                            <CustomButton variant='contained' sx={{ width: 'max-content' }} >Đăng ký </CustomButton>
                        </Stack>
                        <Tooltip title="Open settings" style={{ display: isLogin ? "block" : "none" }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header