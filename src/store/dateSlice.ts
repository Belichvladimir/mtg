import { createSlice } from '@reduxjs/toolkit';

interface DateState {
  value: string;
}

const initialState: DateState = {
  value: '',
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state: DateState, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
