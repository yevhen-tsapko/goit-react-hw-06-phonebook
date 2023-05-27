import { createSlice } from '@reduxjs/toolkit';
const initialFilter = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});
export const setFilter = filterSlice.actions.setFilter;
export const filterReducer = filterSlice.reducer;
