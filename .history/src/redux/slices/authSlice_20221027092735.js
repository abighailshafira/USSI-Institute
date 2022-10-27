import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("token"),
    // isAdmin: false,
    username: "",
    password: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
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

export const { setAccessToken, setUsername, setPassword, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
