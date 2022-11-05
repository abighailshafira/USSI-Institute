import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: localStorage.getItem("token"),
    // isAdmin: false,
    email: "",
    password: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.name = action.payload;
        },
        setData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        clearData: (state, action) => {
            return initialState;
        }
    }
});

export const { setAccessToken, setEmail, setPassword, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
