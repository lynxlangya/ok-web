import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../index';

interface MenuState {
  list: any[];
}

const initialState: MenuState = {
  list: []
};

export const counterSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    createMenu: (state, menu) => {
      state.list = menu.payload;
    },
  },
});

export const { createMenu } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: AppState) => state.counter.value)`
export const menuList = (state: AppState) => state.menu.list;

export default counterSlice.reducer;
