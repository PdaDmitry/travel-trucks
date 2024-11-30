import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersThunc, fetchCampersThuncById } from './operations';

const handleErrorState = state => {
  state.isLoading = false;
  state.isError = true;
};

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  selectedCamper: null,
  perPage: 4,
  total: 0,
  maxPage: 1,
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
        state.total = 0;
      })
      .addCase(fetchCampersThunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = state.items.length;
        state.maxPage = Math.ceil(state.total / state.perPage);
      })
      .addCase(fetchCampersThunc.rejected, handleErrorState)
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
      .addCase(fetchCampersThuncById.rejected, handleErrorState);
  },
});

export const campersReducer = catalogSlice.reducer;
