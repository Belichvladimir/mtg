import { createSlice } from '@reduxjs/toolkit';

interface pageState {
  value: number;
}

const initialState: pageState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state: pageState, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
