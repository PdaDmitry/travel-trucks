import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampersThunc = createAsyncThunk('fetchCampers', async (query, thunkAPI) => {
  try {
    // throw new Error('Simulated network error');  //error simulation
    const response = await axios.get('/campers', { params: query });

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

export const fetchCampersFavoriteById = createAsyncThunk(
  'fetchCampersFavoriteById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
