import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";
import { handlePending } from "../contacts/slice";



const slice = createSlice({
  name: 'auth',
  initialState: {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false, 
  error: null,
    },
    extraReducers: builder => builder
        .addCase(register.pending, handlePending)
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, state => {
            state.loading = false;
            state.error = "Registration problem";
        })
        .addCase(logIn.pending, handlePending)
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, state => {
            state.loading = false;
            state.error = "Login problem";
        })
        .addCase(logOut.pending, handlePending)
        .addCase(logOut.fulfilled, (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.loading = false;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, state => {
            state.loading = false;
            state.error = "logOut problem";
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
            state.error = null;
            state.loading = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.loading = false;
            state.error = "log in again!";
    })
});

export default slice.reducer;