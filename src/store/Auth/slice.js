import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    isLogin: false,
    userLogin: '',
    userIslogin: '',
    userToken: null
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const login = createAsyncThunk("login", async (data) => {
    try {
        const response = await axios.post(
            `${baseURL}/signin`,
            data,
            { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
        )


        console.log("response login", response)
        return response.data.data
    } catch (error) {
        throw new error

    }
})

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {





        logout(state) {
            state.isLogin = false
            state.userIslogin = ''
            state.userLogin = ''

        },
        reload(state) {
            state.isLogin = true


        },
        setIsLogin(state, { payload }) {
            state.isLogin = payload


        },

    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            if (payload !== null && payload !== undefined) {
                localStorage.setItem('userToken', payload)
                state.isLogin = true

            }




        })
        builder.addCase(login.rejected, (state) => {
            alert("lỗi");
        })


    }

})

export const { reducer: authReducer, actions: authActions } = authSlice