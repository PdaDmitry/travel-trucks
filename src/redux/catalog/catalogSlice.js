import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersFavoriteById, fetchCampersThunc, fetchCampersThuncById } from './operations';

const handleErrorState = state => {
  state.isLoading = false;
  state.isError = true;
};

const initialState = {
  items: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
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
  reducers: {
    updateFavorites(state, action) {
      state.favorites = action.payload;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
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
      .addCase(fetchCampersThuncById.rejected, handleErrorState)
      //feavorite
      .addCase(fetchCampersFavoriteById.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCampersFavoriteById.fulfilled, (state, action) => {
        state.isLoading = false;

        const camp = action.payload;
        const camperIndex = state.favorites.findIndex(item => item.id === camp.id);

        if (camperIndex === -1) {
          state.favorites.push(camp);
        } else {
          state.favorites.splice(camperIndex, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      })
      .addCase(fetchCampersFavoriteById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const campersReducer = catalogSlice.reducer;
