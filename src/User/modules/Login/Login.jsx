import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { PATH } from '../../../routes/path';
import { Box, Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from "@mui/lab"
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginAPI } from '../../../APIs/UserAPIs';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/Button/CustomButton';
import login from '../../../lotties/login.json'
import studyAnimation from '../../../lotties/study.json'
import form from '../../../lotties/form.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Lottie from 'react-lottie'
import loginStyle from './login.module.scss'
import { CURRENT_USER, TOKEN } from '../../../constant';
const notify = (message, status) => toast(message)
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: studyAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const Login = () => {
    const navigate = useNavigate()
    const schema = yup.object({

        taiKhoan: yup
            .string()
            .required("Vui lòng nhập thông tin")
            .min(4, "Tài khoản phải có ít nhất 4 ký tự"),
        matKhau: yup
            .string()
            .required("Vui lòng nhập thông tin")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                "Mật khẩu chứa ít nhất 8 ký tự bao gồm 1 ký tự viết hoa, 1 ký tự đặc biệt, 1 ký tự số, 1 ký tự viết thường."
            ),

    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
        },
        mode: "all",
        resolver: yupResolver(schema),
    });

    const { mutate: handlelogin, isPending, isSuccess, status, data, error } = useMutation({
        mutationFn: (payload) => LoginAPI(payload),
        onSuccess: (data) => {
            console.log('data: ', data)
            // luu vao local
            if (data && data.status == 200) {
                toast.success(`Đăng nhập thành công!`)
                localStorage.setItem(TOKEN, JSON.stringify(data.data.accessToken))
                localStorage.setItem(CURRENT_USER, JSON.stringify(data.data))

                setTimeout(() => {
                    navigate(PATH.HOME)

                }, 2000)
            }

        },
        onError: (error) => {
            toast.error(error)
        },
    })


    const onSubmit = (payload) => {
        handlelogin(payload)
    };
    return (
        <div>
            <ToastContainer />
            <Link style={{ position: 'fixed', margin: '2rem' }} to={PATH.HOME}>
                <img src="./images/D-Learning.png" alt="" width={200} />
            </Link>

            <div className={loginStyle.formAnimate}>
                <Lottie options={defaultOptions1} width={'100%'} height={'100%'} />
            </div>

            <Container maxWidth="lg" className={loginStyle.login}>

                <Box width={'100%'} className={loginStyle.loginBg}>
                    <Lottie options={defaultOptions} width={'100%'} height={'100%'} />
                </Box>
                <Box width={'80%'} sx={{ backgroundColor: '#e3e3e3c7', padding: '2rem', borderRadius: '10px' }}>
                    <Typography
                        sx={{ fontSize: "36px", fontWeight: "600" }}
                        textAlign={"center"}
                    >
                        Đăng nhập
                    </Typography>
                    <Grid
                    >
                        <Grid item xs >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing={3}>


                                    <TextField
                                        className={loginStyle.ipValue}
                                        label="Tài Khoản"
                                        fullWidth
                                        {...register("taiKhoan")}
                                        error={Boolean(errors.taiKhoan)}
                                        helperText={Boolean(errors.taiKhoan) && errors.taiKhoan.message}
                                    />

                                    <TextField
                                        className={loginStyle.ipValue}

                                        label="Mật Khẩu"
                                        // type={showPassword ? "text" : "password"}
                                        type='password'
                                        fullWidth
                                        {...register("matKhau")}
                                        error={Boolean(errors.matKhau)}
                                        helperText={Boolean(errors.matKhau) && errors.matKhau.message}
                                    // InputProps={{
                                    //     endAdornment: (
                                    //         <InputAdornment position="end">
                                    //             <IconButton
                                    //                 aria-label="toggle password visibility"
                                    //                 onClick={handleClickShowPassword}
                                    //                 onMouseDown={handleMouseDownPassword}
                                    //             >
                                    //                 {showPassword ? <Visibility /> : <VisibilityOff />}
                                    //             </IconButton>
                                    //         </InputAdornment>
                                    //     ),
                                    // }}
                                    />


                                    <CustomButton
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                    // loading={isPending}
                                    >
                                        Đăng nhập
                                    </CustomButton>
                                    <Link to={PATH.REGISTER} style={{ color: 'GrayText', textAlign: 'end', marginTop: '.5rem' }}>Chưa có tài khoản? Đăng ký.</Link>

                                </Stack>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Login