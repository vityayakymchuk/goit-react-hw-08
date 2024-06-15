import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = token => {axios.defaults.headers.common.Authorization = `Bearer ${token}`};

const cleanAuthHeader = () => {axios.defaults.headers.common.Authorization = '';};

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
    }
});

export const logIn = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userData);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
    }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        cleanAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
    }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const response = await axios.get('/users/current');
    return response.data
},
    {
        condition(_, thunkAPI) {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        }
    }
);