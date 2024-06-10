import { configureStore } from '@reduxjs/toolkit';

import dateReducer from './dateSlice';
import reviewReducer from './reviewSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    review: reviewReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
