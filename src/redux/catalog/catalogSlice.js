import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersThunc, fetchCampersThuncById } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  selectedCamper: null,
};

const catalogSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      //Loading all campers
      .addCase(fetchCampersThunc.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCampersThunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampersThunc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      //Loading a camper by ID
      .addCase(fetchCampersThuncById.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.selectedCamper = null; //Clearing the previous selection
      })
      .addCase(fetchCampersThuncById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload; //Save the selected camper
      })
      .addCase(fetchCampersThuncById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = catalogSlice.reducer;
