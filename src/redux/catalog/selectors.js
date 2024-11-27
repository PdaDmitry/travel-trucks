import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectIsError = state => state.campers.isError;

export const selectCampersById = id =>
  createSelector(
    [selectCampers], // array of all campers
    campers => campers.find(camper => camper.id === id) // Looking for a camper by ID
  );
