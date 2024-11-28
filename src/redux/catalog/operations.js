import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { setIsLoadingStatus, setErrorStatus, fetchCampers } from './catalogSlice';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';
const per_page = 4;

export const fetchCampersThunc = createAsyncThunk('fetchCampers', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers');

    const items = response.data.items;
    const total = response.data.total;

    return { items, total };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCampersThuncById = createAsyncThunk('fetchCampersById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
