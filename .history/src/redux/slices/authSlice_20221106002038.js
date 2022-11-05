import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("token"),
    // isAdmin: false,
    email: "",
    password: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
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

export const { setToken, setEmail, setPassword, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
