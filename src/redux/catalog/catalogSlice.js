import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersThunc } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const catalogSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCampersThunc.fulfilled, (state, action) => {
      // state.loading = false;
      state.items = action.payload;
    });
  },
});

export const campersReducer = catalogSlice.reducer;
