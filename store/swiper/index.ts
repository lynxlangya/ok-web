import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../index';

interface SwiperState {
  list: any[];
}

const initialState: SwiperState = {
  list: []
};

export const counterSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    createSwiper: (state, swiper) => {
      state.list = swiper.payload;
    },
  },
});

export const { createSwiper } = counterSlice.actions;

export const swiperList = (state: AppState) => state.swiper.list;

export default counterSlice.reducer;
