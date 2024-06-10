import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { REVIEW_PER_PAGE } from '../utils/consts';

type language = 'en' | 'ru';

type Rewiew = {
  key: string;
  name: string;
  review: string;
  date: string;
};

interface ReviewItemsState {
  items: Rewiew | undefined;
  perPage: number;
  count: number;
  language: language;
}

const initialState: ReviewItemsState = {
  items: undefined,
  perPage: REVIEW_PER_PAGE,
  count: 0,
  language: 'ru',
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReview: (state: ReviewItemsState, action: PayloadAction<any>) => {
      const data: any = [];
      const items = action.payload;
      Object.keys(items).forEach((key) => {
        data.push({
          key: key,
          name: items[key]?.name,
          review: items[key]?.review,
          date: items[key]?.date,
        });
      });
      state.items = data;
      state.count = Object.keys(action.payload).length;
    },
    switchLanguage: (state: ReviewItemsState, action: PayloadAction<any>) => {
      state.language = action.payload;
    },
  },
});

export const { setReview, switchLanguage } = reviewSlice.actions;

export default reviewSlice.reducer;
