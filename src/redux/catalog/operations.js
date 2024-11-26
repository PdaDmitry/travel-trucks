import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { setIsLoadingStatus, setErrorStatus, fetchCampers } from './catalogSlice';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampersThunc = createAsyncThunk('fetchCampers', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers');

    return response.data.items;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
